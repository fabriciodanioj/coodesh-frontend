import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Message = styled.div`
  font-size: 60px;
  color: #8e8e93;
`;

export const Link = styled(RouterLink)`
  text-decoration: none;

  font-size: 20px;
  color: #007aff;
`;
