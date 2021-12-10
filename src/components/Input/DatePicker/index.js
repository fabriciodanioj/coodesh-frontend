import React, { useRef, useState, useEffect } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Label, Error } from '../styles';
import { Datepicker, Container } from './styles';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = ({
  name,
  label,
  className,
  fullWidth,
  onChange,
  ...rest
}) => {
  const datepickerRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [date, setDate] = useState(new Date());
  delete rest.defaultValue;

  const handleChange = (date) => {
    setDate(date);

    if (onChange) onChange(date);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: datepickerRef.current,
      path: 'props.selected',
      setValue: (ref, value) => {
        if (!value) return;

        setDate(new Date(value));
      },
      clearValue: (ref) => {
        ref.clear();
      },
    });
  }, [fieldName, registerField]);

  useEffect(() => {
    if (defaultValue) setDate(new Date(defaultValue));
    else setDate(new Date());
  }, [defaultValue]);

  return (
    <Container className={`root-input ${className}`} fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={fieldName} error={!!error}>
          {label}
        </Label>
      )}
      <Datepicker
        ref={datepickerRef}
        selected={date}
        onChange={handleChange}
        error={error}
        locale="pt-BR"
        dateFormat="dd/MM/yyyy"
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

DatePicker.defaultProps = {
  className: '',
  fullWidth: true,
  onChange: null,
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
};

export default DatePicker;
