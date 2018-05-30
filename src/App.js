import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Input, TextArea, Button } from './components';
import logo from './logo.svg';
import './App.css';

const baseURL = 'https://opengov-be.herokuapp.com/api/stories/v1';

const Form = styled.form`
  width: 50%;
  margin: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: '', html_file: '', loading: false };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  showFile = (blob) => {
      const newBlob = new Blob([blob], { type: "application/pdf" });

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }

      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "file.pdf";
      link.click();
      setTimeout(() => {
        window.URL.revokeObjectURL(data);
      }, 100);
  }

  getPdf = async () => {
    const {token, html_file} = this.state;
    try {
      const response = await axios.request({
        headers: {
          'Authorization': `Token token=${token}`,
          'Content-Type': 'application/json'
        },
        method: 'post',
        url: '/stories/getpdf',
        responseType: 'blob',
        data: { html_file }
      });

      this.showFile(response.data);
      this.setState({ loading: false });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  handleSubmit = (event) => {
    this.setState({ loading: true });
    this.getPdf();
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Get PDF Form</h1>
          <h4>API: {baseURL}</h4>
        </header>
        <div className="App-intro">
          <Form onSubmit={this.handleSubmit}>
            <Input
              label={'Token'}
              placeholder={'eg: wwddededdddedededededddd'}
              name={'token'}
              value={this.state.token}
              onChange={this.handleChange} />
            <TextArea
              label={'Base64 Encoded HtmlCode'}
              rows={'15'}
              placeholder={'eg: PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UsY2hyb21lPTEiPjx0aXRsZT50ZXN0IDQwNDwvdGl0bG'}
              name={'html_file'}
              value={this.state.html_file}
              onChange={this.handleChange} />
            <Button type={'submit'} primary loading={this.state.loading}>get pdf</Button>
          </Form>
        </div>
      </div>

    );
  }
}


export default App;
