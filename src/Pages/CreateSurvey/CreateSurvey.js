import React from 'react';

import CreateSurveyBlock from '../../Components/CreateSurveyBlock/CreateSurveyBlock';
import PageLoader from '../../Components/Loaders/PageLoader';
import { useStore } from '../../State/use-store';
import { useStyles } from './CreateSurvey.style';

function CreateSurvey() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <div className={classes.createSurveyContainer}>
      {loadingData ? <PageLoader /> : <CreateSurveyBlock />}
    </div>
  );
}

export default CreateSurvey;
