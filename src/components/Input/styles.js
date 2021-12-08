import styled, { css } from 'styled-components';

import fadeIn from '~/styles/animations/fadeIn';

export const Container = styled.div`
  ${fadeIn};

  width: 100%;
`;

export const Field = styled.input`
  -webkit-appearance: none;

  background: transparent;
  color: #ffffff;

  font-size: 16px;

  padding: 0px 10px;
  height: 45px;
  border-radius: 10px;

  transition: border-color 200ms linear;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  &::placeholder {
    font-size: 16px;
    color: #aeaeb2;
  }

  width: 100%;

  max-width: ${({ width }) => width || `100%`};

  ${({ error }) =>
    error &&
    css`
      border-color: #ff3b2f;

      &:hover {
        border-color: #f83019;
      }
    `};
`;

export const Label = styled.label`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;

  ${({ color }) => {
    if (color === 'black')
      return css`
        color: '#000000';
      `;

    return css`
      color: ${color};
    `;
  }}
`;

export const Error = styled.span`
  color: #ff3b2f;
  font-size: 12px;
`;
