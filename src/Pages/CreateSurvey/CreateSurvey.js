import React from 'react';

import CreateSurveyBlock from '../../Components/CreateSurveyBlock/CreateSurveyBlock';
import { useStyles } from './CreateSurvey.style';

function CreateSurvey() {
  const classes = useStyles();

  return (
    <div className={classes.createSurveyContainer}>
      <CreateSurveyBlock />
    </div>
  );
}

export default CreateSurvey;
