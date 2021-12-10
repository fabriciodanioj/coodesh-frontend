import styled, { css } from 'styled-components';

import ReactDatePicker from 'react-datepicker';

import { Container as GenericContainer } from '../styles';

export const Container = styled(GenericContainer)`
  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => theme.colors.orange};
  }
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const Datepicker = styled(ReactDatePicker)`
  -webkit-appearance: none;
  width: 100%;
  font-size: 16px;
  padding: 0px 10px;
  height: 45px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  transition: border-color 200ms linear;

  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.danger.main};
      &:hover {
        border-color: #f83019;
      }
    `}
`;
