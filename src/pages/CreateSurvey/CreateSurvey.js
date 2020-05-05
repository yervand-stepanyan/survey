import React from 'react';

import CreateSurveyBlock from '../../components/CreateSurveyBlock/CreateSurveyBlock';
import PageLoader from '../../components/Loaders/PageLoader';
import { useStore } from '../../state/use-store';
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
