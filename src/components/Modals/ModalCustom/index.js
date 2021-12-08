import React, { useImperativeHandle, forwardRef, useState } from 'react';

import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';

import { Container, Content, ButtonClose, Title } from './styles';

const Modal = ({ title, children, modalRef, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(modalRef, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  if (isOpen)
    return createPortal(
      <Container>
        <Content {...rest}>
          <Title>{title}</Title>
          <ButtonClose type="button" onClick={() => setIsOpen(false)}>
            <IoIosClose />
          </ButtonClose>
          {children}
        </Content>
      </Container>,
      document.body
    );

  return null;
};

Modal.defaultProps = {
  initialData: {},
  size: 'default',
};

Modal.propTypes = {
  initialData: PropTypes.oneOfType([PropTypes.object]),
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  modalRef: PropTypes.ref,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default forwardRef(Modal);
