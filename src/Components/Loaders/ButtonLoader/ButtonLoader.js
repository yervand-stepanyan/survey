import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './ButtonLoader.style';

function ButtonLoader({ color }) {
  const classes = useStyles();

  return (
    <CircularProgress
      className={`${classes.buttonProgress} ${classes[color]}`}
      size={24}
      thickness={8}
    />
  );
}

ButtonLoader.propTypes = {
  color: PropTypes.string.isRequired
};

export default ButtonLoader;
