import React from 'react';
import Surveys from '../Surveys';

import { newData } from '../newData';

import { useStyles } from './TakeSurveyBlock.style';

function TakeSurveyBlock() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {' '}
      <Surveys surveys={newData} />
    </div>
  );
}

export default TakeSurveyBlock;
