import React from 'react';

import Container from '@material-ui/core/Container';
import Loader from '../../components/Loader';
import { LOADER_TYPE } from '../../globals/constants';
import TakeSurveyBlock from '../../components/TakeSurveyBlock/TakeSurveyBlock';
import { useStore } from '../../state/use-store';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <Container maxWidth="md" className={classes.takeSurveyContainer}>
      {loadingData ? <Loader type={LOADER_TYPE.page} /> : <TakeSurveyBlock />}
    </Container>
  );
}

export default TakeSurvey;
