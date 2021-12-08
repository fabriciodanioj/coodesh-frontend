import styled, { keyframes } from 'styled-components';
import getColor from '~/utils/getColor';

const spin = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 3px solid rgba(255, 255, 255, 0.2);
  border-right: 3px solid rgba(255, 255, 255, 0.2);
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  border-left: 3px solid ${({ color, theme }) => getColor(color, theme) || "#ffffff"};
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${spin} 1.1s infinite linear;
  border-radius: 50%;
  width: ${({ size }) => size || "24px"};
  height: ${({ size }) => size || "24px"};
`;
