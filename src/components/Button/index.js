import React from 'react';

import PropTypes from 'prop-types';

import { Container, LoaderComponent } from './styles';

const Button = ({ label, loading, ...rest }) => {
  return (
    <Container disabled={loading} {...rest}>
      {loading ? (
        <LoaderComponent
          type="ThreeDots"
          color="#fff"
          height={15}
          width={50}
          // 3 secs
        />
      ) : (
        <> {label} </>
      )}
    </Container>
  );
};

Button.defaultProps = {
  type: 'button',
  className: '',
  color: 'default',
  variant: 'button',
  size: 'default',
  disabled: false,
  fullWidth: false,
  loading: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
  ]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
