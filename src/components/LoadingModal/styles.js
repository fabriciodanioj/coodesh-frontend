import styled, { keyframes } from 'styled-components';

import fadeIn from 'react-animations/lib/fade-in';

import devices, { max } from '~/styles/configs/devices';

const fadeInAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  position: fixed;

  overflow-y: scroll;

  animation: 200ms ${fadeInAnimation};

  width: 100vw;
  height: 100vh;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: #ffffff90;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${max.sm} {
    padding: 15px;
  }
`;
