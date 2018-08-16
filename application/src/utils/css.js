import { css, keyframes } from 'styled-components';
import { darken } from 'polished';

export const colors = {
  border: '#eeeeee',
  label: '#aaaaaa',
  input: '#606266',
  default: '#aaaaaa',
  danger: '#f56c6c',
  success: '#67c23a',
  warning: '#e6a23c',
  info: '#20A0FF',
  primary: '#f27237',
  primary_light: '#F9AB55',
  neutral: '#F7F5FB',
  complimentry: '#084887',
  complimentry_light: '#909CC2',
  text: '#8492A6',
  text_primary: '#303133',
  text_regular: '#606266',
  text_secondary: '#909399',
  text_placeholder: '#c0c4cc',
};

export const colorMixin = color => css`
    color: white;
    stroke: white;
    border: 1px solid ${color};;
    background-color: ${color};

    &:hover {
      color: white;
      background-color: ${darken(0.1, color)};
    }
  `;

export const rotate360 = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const buttonDash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124px;
  }
`;

export const loadingDash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0px;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -45px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
`;

export const bounce = keyframes`
  from,
  to {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const textenter = keyframes`
  0% {
    transform: translateY(45px);
  }
  15% {
    transform: translateY(0px);
  }
  90% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(45px);
  }
`;
