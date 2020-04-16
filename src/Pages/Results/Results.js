import React from 'react';

import ResultsBlock from '../../Components/ResultsBlock/ResultsBlock';
import { useStyles } from './Results.style';

function Results() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <ResultsBlock />
    </div>
  );
}

export default Results;
