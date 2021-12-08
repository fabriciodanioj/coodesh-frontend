/* eslint-disable react/prop-types */
import React, { forwardRef } from 'react';

import { Form as Unform } from '@unform/web';

import { Container, Title } from './styles';

const Form = ({ children, onSubmit, title, ...rest }, ref) => {
  return (
    <Container {...rest}>
      {title && <Title>{title}</Title>}
      <Unform ref={ref} onSubmit={onSubmit} {...rest}>
        {children}
      </Unform>
    </Container>
  );
};

export default forwardRef(Form);
