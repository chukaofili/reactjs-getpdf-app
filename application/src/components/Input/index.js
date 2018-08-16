import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { colors } from '../../utils/css';

const StyledInput = styled.input`
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  padding: 30px 10px 10px;
  border-radius: 2px;
  font-size: 16px;
  color: ${colors.input};
  border: solid ${colors.border} 1px;
  display: inline-block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  transition: all 0.6s ease;

  &:hover {
    border-color: ${darken(0.1, colors.border)};
  }

  &:active {
    border-color: ${colors.primary};
  }
  
  &:focus {
    border-color: ${colors.primary};
  }

  &::placeholder {
    color: ${lighten(0.4, colors.input)};
    font-size: 15px;
  }
`;

const StyledLabel = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  font-size: 14px;
  position: absolute;
  top: 19px;
  left: 20px;
  color: ${colors.label};
`;

const Wrap = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  padding: 10px;
  width: 100%;
`;

const Input = (props) => {
  return (
    <Wrap>
      <StyledInput {...props} />
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
    </Wrap>
  );
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};


export default Input;