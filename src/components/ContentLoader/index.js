import React from 'react';

import PropTypes from 'prop-types';

import { Container } from './styles';

const ContentLoader = ({
  width,
  height,
  borderRadius,
  speed,
  backgroundColor,
  foregroundColor,
}) => {
  return (
    <Container
      width={width}
      height={height}
      borderRadius={borderRadius}
      speed={speed}
      backgroundColor={backgroundColor}
      foregroundColor={foregroundColor}
    />
  );
};

ContentLoader.defaultProps = {
  width: '100%',
  height: 30,
  borderRadius: 0,
  speed: 1000,
  backgroundColor: '#f3f3f3',
  foregroundColor: '#ecebeb',
};

ContentLoader.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  speed: PropTypes.number,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
};

export default ContentLoader;
