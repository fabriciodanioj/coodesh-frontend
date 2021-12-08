import React, { useImperativeHandle, forwardRef, useState } from 'react';

import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';

import Button from '~/components/Button';

import { Container, Content, ButtonClose, Title } from '../ModalCustom/styles';
import { Controls } from './styles';

const Modal = ({ title, children, modalRef, onSubmit, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deleteId, setDeleteId] = useState();

  useImperativeHandle(modalRef, () => ({
    open: (_id) => {
      setIsOpen(true);
      console.log(_id);
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
            <Button label="Cancelar" onClick={() => modalRef.current.close()} />
            <Button
              color="danger"
              label="Excluir"
              onClick={() => onSubmit(deleteId)}
            />
          </Controls>
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
