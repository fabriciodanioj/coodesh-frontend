import React, { useRef, useEffect, useCallback } from 'react';

import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import masks from '~/utils/masks';

import { Container, Label, Field, Error } from './styles';

const Textarea = ({
  label,
  name,
  colorLabel,
  className,
  fullWidth,
  noBorder,
  cols,
  rows,
  variant,
  ...rest
}) => {
  const inputRef = useRef(null);

  // defaultValue
  const { fieldName, registerField, error, defaultValue = '' } = useField(name);

  useEffect(() => {
    if (inputRef.current && !rest.value)
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
        getValue: (ref) => {
          const { value } = ref;

          return value;
        },
        setValue: (ref, value) => {
          const newValue = '';

          ref.value = newValue;
        },
      });
  }, [fieldName, registerField, rest.value]);

  // To use masks
  const handleChange = useCallback(
    (e) => {
      e.persist();

      if (rest.onChange) rest.onChange(e);
    },
    [inputRef, rest]
  );

  useEffect(() => {
    if (String(defaultValue) !== '') {
      inputRef.current.value = defaultValue;
    }
  }, [defaultValue]);

  const inputProps = {
    ...(rest.value ? { value: rest.value } : { defaultValue }),
    ...rest,
    onChange: handleChange,
  };

  return (
    <Container className={`root-input ${className}`} fullWidth={fullWidth}>
      {label && (
        <Label htmlFor={fieldName} color={colorLabel}>
          {label}
        </Label>
      )}
      <Field
        ref={inputRef}
        id={fieldName}
        name={fieldName}
        error={!!error}
        variant={variant}
        rows={rows}
        cols={cols}
        {...inputProps}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

Textarea.defaultProps = {
  label: null,
  className: '',
  mask: '',
  colorLabel: '#FFFFFF',
  noBorder: false,
  fullWidth: true,
  returnUnmask: true,
  width: '',
  variant: '',
  cols: 40,
  rows: 5,
};

Textarea.propTypes = {
  label: PropTypes.string,
  colorLabel: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  className: PropTypes.string,
  noBorder: PropTypes.bool,
  returnUnmask: PropTypes.bool,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  mask: PropTypes.string,
  variant: PropTypes.string,
};

export default Textarea;
