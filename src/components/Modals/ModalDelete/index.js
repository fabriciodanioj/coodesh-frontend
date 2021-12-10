import React, { useImperativeHandle, forwardRef, useState } from 'react';

import { Button } from '@material-ui/core';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';

import { Container, Content, ButtonClose, Title } from '../ModalCustom/styles';
import { Controls } from './styles';

const Modal = ({ title, children, onSubmit, ...rest }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();

  useImperativeHandle(ref, () => ({
    open: (_id) => {
      setIsOpen(true);
      setDeleteId(_id);
    },
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
          <Controls>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => onSubmit(deleteId)}
            >
              Excluir
            </Button>
          </Controls>
        </Content>
      </Container>,
      document.body
    );

  return null;
};

export default forwardRef(Modal);
