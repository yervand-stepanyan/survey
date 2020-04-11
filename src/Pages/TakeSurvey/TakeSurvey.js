import React from 'react';

import TakeSurveyBlock from '../../Components/TakeSurveyBlock/TakeSurveyBlock';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TakeSurveyBlock />
    </div>
  );
}

export default TakeSurvey;
