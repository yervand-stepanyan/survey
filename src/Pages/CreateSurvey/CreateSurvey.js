import React from 'react';

import CreateSurveyBlock from '../../Components/CreateSurveyBlock/CreateSurveyBlock';
import { useStore } from '../../State/use-store';
import { useStyles } from './CreateSurvey.style';
import PageLoader from '../../Components/Loaders/PageLoader';

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
