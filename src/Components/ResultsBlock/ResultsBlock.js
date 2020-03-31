import React from 'react';

import { useStyles } from './ResultsBlock.style';

function ResultsBlock() {
  const classes = useStyles();

  return <div className={classes.container}>ResultsBlock works!!!</div>;
}

export default ResultsBlock;
