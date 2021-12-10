import styled, { css } from 'styled-components';

import fadeIn from '~/styles/animations/fadeIn';

export const Container = styled.div`
  ${fadeIn};

  width: 100%;
`;

export const Field = styled.textarea`
  -webkit-appearance: none;

  font-size: 16px;

  padding: 10px;
  height: 100px;
  border-radius: 8px;
  transition: border-color 200ms linear;
  border: 1px solid ${({ theme }) => theme.colors.secondary};

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

  color: ${({ theme }) => theme.colors.secondary};
`;

export const Error = styled.span`
  color: #ff3b2f;
  font-size: 12px;
`;
