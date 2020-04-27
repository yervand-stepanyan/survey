import React from 'react';
import { useParams } from 'react-router-dom';

import SurveyQuestions from '../../Components/TakeSurveyBlock/SurveyQuestions';
import { useStore } from '../../State/use-store';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();
  const { id } = useParams();
  const { stateSurvey } = useStore();
  const survey = stateSurvey.find(item => item.id === id);
  const { id: surveyId, title, questions } = survey;

  return (
    <div className={classes.container}>
      <SurveyQuestions
        questions={questions}
        surveyId={surveyId}
        title={title}
      />
    </div>
  );
}

export default TakeSurvey;
