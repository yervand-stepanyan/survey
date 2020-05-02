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
          variant="outlined"
          shape="rounded"
          onChange={handlePaginationChange}
        />
      </div>
    </div>
  );
}

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  handlePaginationChange: PropTypes.func.isRequired
};

export default Pagination;
