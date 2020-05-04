import React from 'react';
import PropTypes from 'prop-types';

import { Pagination as MyPagination } from '@material-ui/lab';

import { useStyles } from './Pagination.style';

function Pagination({ totalPages, handlePaginationChange }) {
  const classes = useStyles();

  return (
    <div className={classes.paginationSection}>
      <div>
        <MyPagination
          count={totalPages}
          onChange={handlePaginationChange}
          shape="rounded"
          variant="outlined"
        />
      </div>
    </div>
  );
}

Pagination.propTypes = {
  handlePaginationChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};

export default Pagination;
