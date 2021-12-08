import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const Link = ({ label, route, className, color, size, margin, ...rest }) => {
  return (
    <Container
      to={route}
      className={`root-link ${className}`}
      color={color}
      size={size}
      margin={margin}
      {...rest}
    >
      {label}
    </Container>
  );
};

Link.defaultProps = {
  label: '',
  route: '',
  color: '',
  className: '',
  margin: '',
  size: '',
};

Link.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  route: PropTypes.string,
  className: PropTypes.string,
  margin: PropTypes.string,
  size: PropTypes.string,
};

export default Link;
