import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  text-decoration: none !important;
  transition: color 200ms linear;

  font-weight: 500;

  font-size: ${({ size }) => size || '0.875rem'};
  color: ${({ color, theme }) => color || theme.colors.primary};
  margin: 15px 0px;

  :hover {
    opacity: 0.8;
  }
`;
