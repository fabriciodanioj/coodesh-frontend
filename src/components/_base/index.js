import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const Base = ({ example }) => {
  return <Container>{example}</Container>;
};

Base.defaultProps = {
  example: '',
};

Base.propTypes = {
  example: PropTypes.string,
};

export default Base;
