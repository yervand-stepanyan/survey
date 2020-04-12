import React from 'react';
import SurveyQuestions from '../SurveyQuestions';

import { data } from '../data';

import { useStyles } from './TakeSurveyBlock.style';

function TakeSurveyBlock() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {' '}
      <SurveyQuestions questions={data} />
    </div>
  );
}

export default TakeSurveyBlock;
