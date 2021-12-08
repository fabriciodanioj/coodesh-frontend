import React from 'react';

import { Pagination } from '@material-ui/lab';
import PropTypes from 'prop-types';

import { Container } from './styles';

const PaginationContent = ({
  onChangePage,
  paginateData: { page, totalPages },
}) => {
  return (
    <Container>
      <Pagination count={totalPages} page={page} onChange={onChangePage} />
    </Container>
  );
};

PaginationContent.defaultProps = {
  onChangePage: () => {},
  paginateData: {
    page: 1,
    totalPages: 1,
  },
};

PaginationContent.propTypes = {
  paginateData: PropTypes.objectOf({
    page: PropTypes.number,
    totalPages: PropTypes.number,
  }),
  onChangePage: PropTypes.func,
};

export default PaginationContent;
