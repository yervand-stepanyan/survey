import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import { LOADER_TYPE } from '../../globals/constants';
import { useStyles } from './Loader.style';

function Loader({ color, type }) {
  const classes = useStyles();

  const loaderType = loader => {
    switch (loader) {
      case LOADER_TYPE.button:
        return (
          <CircularProgress
            className={`${classes.buttonProgress} ${classes[color]}`}
            size={24}
            thickness={8}
          />
        );
      case LOADER_TYPE.icon:
        return (
          <CircularProgress
            className={`${classes.fabProgress} ${classes[color]}`}
            size={24}
            thickness={8}
          />
        );
      case LOADER_TYPE.page:
        return (
          <div className={classes.pageLoaderContainer}>
            <CircularProgress size={60} thickness={4} />
          </div>
        );
      default:
        return null;
    }
  };

  return loaderType(type);
}

Loader.propTypes = {
  color: PropTypes.string,
  type: PropTypes.string.isRequired
};

Loader.defaultProps = {
  color: ''
};

export default Loader;
