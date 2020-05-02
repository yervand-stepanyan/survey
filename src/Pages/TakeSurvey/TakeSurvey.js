import React from 'react';

import Container from '@material-ui/core/Container';
import PageLoader from '../../Components/Loaders/PageLoader';
import TakeSurveyBlock from '../../Components/TakeSurveyBlock/TakeSurveyBlock';
import { useStore } from '../../State/use-store';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <Container maxWidth='md' className={classes.takeSurveyContainer}>
      {loadingData ? <PageLoader /> : <TakeSurveyBlock />}
    </Container>
  );
}

export default TakeSurvey;
