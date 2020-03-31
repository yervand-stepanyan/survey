import React from 'react';

import { useStyles } from './HomeBlock.style';

function HomeBlock() {
  const classes = useStyles();

  return <div className={classes.container}>HomeBlock works!!!</div>;
}

export default HomeBlock;
