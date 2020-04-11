import React from 'react';
import SurveyQuestion from '../SurveyQuestion';

import { data } from '../data';

import { useStyles } from './TakeSurveyBlock.style';

function TakeSurveyBlock() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {' '}
      <SurveyQuestion questions={data} />
    </div>
  );
}

export default TakeSurveyBlock;
