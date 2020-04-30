import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './IconLoader.style';

function IconLoader({ color }) {
  const classes = useStyles();

  return (
    <CircularProgress
      className={`${classes.fabProgress} ${classes[color]}`}
      size={68}
    />
  );
}

IconLoader.propTypes = {
  color: PropTypes.string.isRequired
};

export default IconLoader;
