import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './PageLoader.style';

function PageLoader() {
  const classes = useStyles();

  return (
    <div className={classes.pageLoaderContainer}>
      <CircularProgress size={60} thickness={4} />
    </div>
  );
}

export default PageLoader;
