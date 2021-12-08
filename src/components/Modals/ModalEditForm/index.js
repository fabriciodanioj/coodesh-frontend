import React, {
  useImperativeHandle,
  forwardRef,
  useState,
  useRef,
} from 'react';

import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';

import Form from '~/components/Form';

import { Container, Content, ButtonClose, Title } from '../ModalCustom/styles';

const ModalEditForm = ({
  title,
  formRef,
  children,
  modalRef,
  onSubmit,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialData, setInitialData] = useState();

  useImperativeHandle(modalRef, () => ({
    open: (data) => {
      setIsOpen(true);
      setInitialData(data);
    },
    close: () => {
      setIsOpen(false);
      setInitialData(null);
    },
  }));

  const handleSubmit = (formData) => {
    if (initialData?._id) {
      formData._id = initialData?._id;
    }
    onSubmit(formData);
  };

  if (isOpen)
    return createPortal(
      <Container>
        <Content {...rest}>
          <Title>{`${
            initialData?._id ? 'Editar' : 'Adicionar'
          } ${title}`}</Title>
          <ButtonClose type="button" onClick={() => modalRef.current.close()}>
            <IoIosClose />
          </ButtonClose>

          <Form ref={formRef} onSubmit={handleSubmit} initialData={initialData}>
            {children}
          </Form>
        </Content>
      </Container>,
      document.body
    );

  return null;
};

ModalEditForm.defaultProps = {
  size: 'default',
};

ModalEditForm.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  ModalEditFormRef: PropTypes.ref,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default forwardRef(ModalEditForm);
