import React from 'react';

import { useStyles } from './SurveyQuestion.style';

function TakeSurveyBlock() {
  const classes = useStyles();

  return <div className={classes.container}>SurveyQuestion works!!</div>;
}

export default TakeSurveyBlock;
