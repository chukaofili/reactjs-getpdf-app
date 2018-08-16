import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Input, TextArea, Button } from './components';
import logo from './logo.svg';
import './App.css';

const Form = styled.form`
  width: 80%;
  margin: auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    const token = "";
    const api_url = 'https://opengov-be.herokuapp.com/api/stories/v1';
    const html = "PCFET0NUWVBFIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48bWV0YSBodHRwLWVxdWl2PSJYLVVBLUNvbXBhdGlibGUiIGNvbnRlbnQ9IklFPWVkZ2UsY2hyb21lPTEiPjx0aXRsZT50ZXN0IDQwNDwvdGl0bGU+PG1ldGEgbmFtZT0iZGVzY3JpcHRpb24iIGNvbnRlbnQ9InRlc3RpbmcgNDA0Ij48bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm8iPjxtZXRhIHByb3BlcnR5PSJvZzp0aXRsZSIgY29udGVudD0idGVzdCA0MDQiPjxtZXRhIHByb3BlcnR5PSJvZzp0eXBlIiBjb250ZW50PSJ3ZWJzaXRlIj48bWV0YSBwcm9wZXJ0eT0ib2c6c2l0ZV9uYW1lIiBjb250ZW50PSJ0ZXN0IDQwNCI+PG1ldGEgcHJvcGVydHk9Im9nOmRlc2NyaXB0aW9uIiBjb250ZW50PSJ0ZXN0aW5nIDQwNCI+PG1ldGEgbmFtZT0idHdpdHRlcjp0aXRsZSIgY29udGVudD0idGVzdCA0MDQiPjxtZXRhIG5hbWU9InR3aXR0ZXI6ZGVzY3JpcHRpb24iIGNvbnRlbnQ9InRlc3RpbmcgNDA0Ij48bWV0YSBuYW1lPSJhdXRob3IiIGNvbnRlbnQ9Ik9wZW5Hb3YiPjxtZXRhIG5hbWU9InJvYm90cyIgY29udGVudD0iaW5kZXgsIGZvbGxvdyI+PGxpbmsgcmVsPSJzdHlsZXNoZWV0IiB0eXBlPSJ0ZXh0L2NzcyIgaHJlZj0iaHR0cHM6Ly9vZ3Rlc3Rpbmctc3Rvcmllcy5zMy5hbWF6b25hd3MuY29tL3Jlc291cmNlcy9zdG9yeS1tb2R1bGVzLmNzcyIvPjwvaGVhZD48Ym9keT48c2NyaXB0IHNyYz0iaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3N0YWdpbmctZW1iZWQtc2RrL2Fzc2V0cy9lbWJlZC1idW5kbGUuanMiPjwvc2NyaXB0PjxtYWluIHJvbGU9Im1haW4iPjxoZWFkZXIgY2xhc3M9ImhlYWRlciIgaWQ9Im1vZHVsZS01YTBiZThkZTUyODNlMjAwMWVhNzE4YTYiPjxkaXYgY2xhc3M9ImdyaWQgY29udGFpbmVyIj48ZGl2IGNsYXNzPSJjb2wtMSI+PG5hdiBjbGFzcz0iaGVhZGVyLW5hdiBjbGVhcmZpeCI+PGRpdiBjbGFzcz0ibG9nbyI+PGRpdiBjbGFzcz0iZWRpdGFibGUiPjxzcGFuPkdJR1NURVI8L3NwYW4+PC9kaXY+PC9kaXY+PC9uYXY+PGRpdiBjbGFzcz0iaGVhZGVyLWNvbnRlbnQiPjxkaXYgY2xhc3M9ImVkaXRhYmxlIj48aDE+R2l2ZSB5b3VyIHN0b3J5IGEgY2xlYXIgYW5kIGVuZ2FnaW5nIHRpdGxlPC9oMT48L2Rpdj48ZGl2IGNsYXNzPSJlZGl0YWJsZSI+PHA+UHJvdmlkZSBzb21lIGFkZGl0aW9uYWwgZGV0YWlsIGFib3V0IHlvdXIgc3RvcnkgdG8gY3JlYXRlIGludGVyZXN0PC9wPjwvZGl2PjwvZGl2PjxkaXYgY2xhc3M9ImhlYWRlci1vdmVybGF5Ij48L2Rpdj48L2Rpdj48L2Rpdj48L2hlYWRlcj48c2VjdGlvbiBjbGFzcz0iZnVsbC13aWR0aCIgaWQ9Im1vZHVsZS01YTBiZThlNjUyODNlMjAwMWVhNzE4YTgiPjxkaXYgY2xhc3M9ImZ1bGwtd2lkdGgtY29udGVudCI+PGRpdiBjbGFzcz0iZWRpdGFibGUiPjxoMj5Xcml0ZSBhIHNob3J0IHRpdGxlPC9oMj48L2Rpdj48ZGl2IGNsYXNzPSJlZGl0YWJsZSI+PHA+SW4gdGhpcyBzZWN0aW9uLCB5b3UgY2FuIGdvIGludG8gZnVydGhlciBkZXRhaWwuIE1ha2UgeW91ciBjb250ZW50IG1vcmUgYWNjZXNzaWJsZSBieSB3cml0aW5nIHNob3J0IHNlbnRlbmNlcywgY2hvb3Npbmcgd29yZHMgYW5kIHBocmFzZXMgeW914oCZZCB1c2Ugd2hlbiB0YWxraW5nIHRvIGEgbmVpZ2hib3IsIGFuZCBhdm9pZGluZyBqYXJnb24uIFRpcDogPGEgaHJlZj0iaHR0cDovL3d3dy5oZW1pbmd3YXlhcHAuY29tIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIj5Vc2UgSGVtaW5nd2F5IEVkaXRvcjwvYT4uIDwvcD48L2Rpdj48L2Rpdj48L3NlY3Rpb24+PGZvb3RlciBjbGFzcz0iZm9vdGVyIiBpZD0ibW9kdWxlLTVhMGJlOGRlNTI4M2UyMDAxZWE3MThhNyI+PGRpdiBjbGFzcz0iZ3JpZCBjb250YWluZXIiPjxkaXYgY2xhc3M9ImNvbC0yIj48ZGl2IGNsYXNzPSJlZGl0YWJsZSI+PHA+KDY1MCkgMzM2LTcxNjc8L3A+PC9kaXY+PGRpdiBjbGFzcz0iZWRpdGFibGUiPjxwPsKpIE9wZW5Hb3Y8L3A+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz0iY29sLTIiPjxkaXYgY2xhc3M9ImVkaXRhYmxlIj48cD5BZGQgbGlua3M8L3A+PC9kaXY+PC9kaXY+PC9kaXY+PC9mb290ZXI+PC9tYWluPjxkaXYgY2xhc3M9InBvd2VyZWQtYnkiPjxhIGhyZWY9Imh0dHBzOi8vb3Blbmdvdi5jb20iIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiPlBvd2VyZWQgYnkgT3BlbkdvdjwvYT48L2Rpdj48L2JvZHk+PC9odG1sPg==";
    this.state = { token: token, html_file: html, api_url: api_url, loading: false };
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
    const { token, html_file} = this.state;
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
          <h4>API: {this.state.api_url}</h4>
        </header>
        <div className="App-intro">
          <Form onSubmit={this.handleSubmit}>
            {/* <Input
              label={'API'}
              placeholder={'eg: https://opengov-be.herokuapp.com/api/stories/v1'}
              name={'api_url'}
              value={this.state.api_url}
              onChange={this.handleChange} /> */}
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
