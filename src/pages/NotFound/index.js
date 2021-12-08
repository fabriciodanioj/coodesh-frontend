import React from 'react';

import { Container, Content, Message, Link } from './styles';

const NotFound = () => {
  return (
    <Container>
      <Content>
        <Message>404</Message>
        <Link to="/">Go to home</Link>
      </Content>
    </Container>
  );
};

export default NotFound;
