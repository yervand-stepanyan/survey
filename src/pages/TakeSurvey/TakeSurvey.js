import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Loader from '../../components/Loader';
import { LOADER_TYPE } from '../../globals/constants';
import TakeSurveyBlock from '../../components/TakeSurveyBlock/TakeSurveyBlock';
import { useStore } from '../../state/use-store';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();
  const { id } = useParams();
  const { isConnectionError, loadingData, stateSurvey } = useStore();
  const [survey, setSurvey] = useState(
    stateSurvey.find(item => item.id === id)
  );

  useEffect(() => {
    const surveyObject = stateSurvey.find(item => item.id === id);

    if (surveyObject) {
      setSurvey(surveyObject);
    }
  }, [stateSurvey, id]);

  return (
    <Container maxWidth="md" className={classes.takeSurveyContainer}>
      {loadingData ? (
        <Loader type={LOADER_TYPE.page} />
      ) : (
        <TakeSurveyBlock
          isConnectionError={isConnectionError}
          survey={survey}
        />
      )}
    </Container>
  );
}

export default TakeSurvey;
