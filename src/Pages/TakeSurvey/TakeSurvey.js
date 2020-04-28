import React from 'react';

import PageLoader from '../../Components/Loaders/PageLoader';
import TakeSurveyBlock from '../../Components/TakeSurveyBlock/TakeSurveyBlock';
import { useStore } from '../../State/use-store';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <div className={classes.takeSurveyContainer}>
      {loadingData ? <PageLoader /> : <TakeSurveyBlock />}
    </div>
  );
}

export default TakeSurvey;
