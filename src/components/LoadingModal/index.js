/* eslint-disable no-unused-vars */
import React, { useImperativeHandle, forwardRef, useState } from 'react';

import { createPortal } from 'react-dom';
import Loader from 'react-loader-spinner';

import { Container } from './styles';

const LoadingModal = ({ ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (isOpen)
    return createPortal(
      <Container>
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      </Container>,
      document.body
    );

  return null;
};

export default forwardRef(LoadingModal);
