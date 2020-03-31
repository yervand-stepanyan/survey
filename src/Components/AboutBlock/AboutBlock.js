import React from 'react';

import { useStyles } from './AboutBlock.style';

function AboutBlock() {
  const classes = useStyles();

  return <div className={classes.container}>AboutBlock works!!!</div>;
}

export default AboutBlock;
