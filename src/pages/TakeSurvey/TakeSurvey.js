import React from 'react';

import Container from '@material-ui/core/Container';
import PageLoader from '../../components/Loaders/PageLoader';
import TakeSurveyBlock from '../../components/TakeSurveyBlock/TakeSurveyBlock';
import { useStore } from '../../state/use-store';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <Container maxWidth="md" className={classes.takeSurveyContainer}>
      {loadingData ? <PageLoader /> : <TakeSurveyBlock />}
    </Container>
  );
}

export default TakeSurvey;
