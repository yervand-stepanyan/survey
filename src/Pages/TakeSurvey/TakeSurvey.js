import React from 'react';

import Container from '@material-ui/core/Container';
import PageLoader from '../../Components/Loaders/PageLoader';
import TakeSurveyBlock from '../../Components/TakeSurveyBlock/TakeSurveyBlock';
import { useStore } from '../../State/use-store';

function TakeSurvey() {
  const { loadingData } = useStore();

  return (
    <Container maxWidth='md'>
      {loadingData ? <PageLoader /> : <TakeSurveyBlock />}
    </Container>
  );
}

export default TakeSurvey;
