import styled, { css, keyframes } from 'styled-components';

const fading = keyframes`
  0% {
    opacity: 0.7;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0.7  ;
  }
`;

const getSize = (prop) => {
  if (typeof prop === 'string') return prop;

  return `${prop}px`;
};

const getTime = (prop) => {
  if (typeof prop === 'string') return prop;

  return `${prop}ms`;
};

export const Container = styled.div`
  animation: ${fading} 1s infinite;

  ${({ width }) => css`
    width: ${getSize(width)};
  `}

  ${({ height }) => css`
    height: ${getSize(height)};
  `}

  ${({ borderRadius }) => css`
    border-radius: ${getSize(borderRadius)};
  `}

  ${({ speed }) => css`
    animation: ${fading} ${getTime(speed)} infinite;
  `}

  ${({ backgroundColor, foregroundColor }) => css`
    background: ${`linear-gradient(to right, ${backgroundColor}, ${foregroundColor})`};
  `}
`;
