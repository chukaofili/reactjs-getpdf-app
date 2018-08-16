import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { colors, colorMixin, rotate360, buttonDash } from '../../utils/css';

const StyledSpinner = styled.svg`
  animation: ${rotate360} 2s linear infinite;
  z-index: 2;
  width: 16px;
  height: 16px;
  overflow: visible;
  float: right;
`;

const StyledCircle = styled.circle`
  cx: 25;
  cy: 25; 
  r: 20;
  fill: none;
  stroke-width: 6;
  stroke-linecap: round;
  animation: ${buttonDash} 1.5s ease-in-out infinite;
`;

const StyledButton = styled.button.attrs({
  disabled: (props => props.disabled || props.loading),
})`
  border: 1px solid ${colors.border};
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  font-size: 13px;
  padding: 10px;
  outline: none;
  text-transform: uppercase;
  transition: all 0.8s ease;
  min-width: 100px;
  width: 100%;
  color: ${colors.default};
  background: none; 
  stroke: ${colors.default};
  
  &:hover {
    color: ${darken(0.1, colors.default)};
    background-color: ${colors.border};
  }

  ${props => props.disabled && css`
      opacity: 0.65;
      cursor: not-allowed;
  `}
  
  ${props => (props.primary ? colorMixin(colors.primary) : '')}
  ${props => (props.success ? colorMixin(colors.success) : '')} 
  ${props => (props.danger ? colorMixin(colors.danger) : '')} 
  ${props => (props.warning ? colorMixin(colors.warning) : '')} 
  ${props => (props.info ? colorMixin(colors.info) : '')} 
`

const Wrap = styled.div`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  padding: 10px;
  width: 100%;
`;

const Button = ({ children, ...props }) => (
  <Wrap>
    <StyledButton {...props}>
      {!props.loading && children}
      {props.loading && 
        <span>
          please wait
         <StyledSpinner viewBox="0 0 50 50"><StyledCircle /></StyledSpinner>
        </span>}
    </StyledButton>
  </Wrap>
);

Button.defaultProps = {
  type: 'button',
  children: 'button',
  loading: false,
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string,
  loading: PropTypes.bool,
};

export default Button;
