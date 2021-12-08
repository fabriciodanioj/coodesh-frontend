import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding: 0 10px;

  ${({ margin }) =>
    css`
      margin: ${margin || '30px 0 0'};
    `}

  ${({ width }) => {
    return css`
      width: ${width}px;
      max-width: ${width}px;

      @media (max-width: ${width + 20}px) {
        width: auto !important;
      }
    `;
  }};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
`;
