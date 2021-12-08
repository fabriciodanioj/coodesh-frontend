import styled, { css, keyframes } from 'styled-components';

import { darken } from 'polished';
import fadeIn from 'react-animations/lib/fade-in';
import zoomIn from 'react-animations/lib/zoom-in';

import modal, { sizes } from '~/styles/configs/modal';

const fadeInAnimation = keyframes`${fadeIn}`;

const zoomInAnimation = keyframes`${zoomIn}`;

export const Container = styled.div`
  position: fixed;

  overflow-y: scroll;

  animation: 200ms ${fadeInAnimation};

  width: 100vw;
  height: 100vh;
  z-index: 99999;
  top: 0;
  left: 0;
  background-color: #00000050;

  padding: 0 15px;
`;

export const Content = styled.div`
  position: relative;

  animation: 300ms ${zoomInAnimation};

  width: 100%;
  background: ${modal.background};
  border-radius: ${modal.borderRadius};
  padding: ${modal.padding};
  box-shadow: 1px 6px 12px rgba(0, 0, 0, 0.1);

  margin: 2rem auto;

  max-width: ${({ size }) => sizes[size || 'default']}px;
`;

export const Title = styled.h3`
  color: ${modal.color};
  margin-bottom: 30px;
`;

export const ButtonClose = styled.button`
  position: absolute;

  top: 15px;
  right: 15px;

  border: none;
  background: none;

  svg {
    width: 30px;
    height: 30px;
    pointer-events: none;
    color: ${darken(0.4, modal.background)};
    transition: color 200ms linear;
  }

  &:hover svg {
    color: ${darken(0.9, modal.background)};
  }
`;
