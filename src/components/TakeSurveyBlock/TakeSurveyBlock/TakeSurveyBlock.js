import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFoundBlock from '../../NotFoundBlock';
import SurveyQuestions from '../SurveyQuestions';
import { useStore } from '../../../state/use-store';
import { useStyles } from './TakeSurveyBlock.style';

function TakeSurveyBlock() {
  const classes = useStyles();
  const { id } = useParams();
  const { isConnectionError, stateSurvey } = useStore();
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
    <div className={classes.takeSurveyBlockContainer}>
      {survey ? (
        <SurveyQuestions
          questions={survey.questions}
          surveyId={survey.id}
          title={survey.title}
        />
      ) : (
        <NotFoundBlock isConnectionError={isConnectionError} />
      )}
    </div>
  );
}

export default TakeSurveyBlock;
