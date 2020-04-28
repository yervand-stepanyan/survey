import React from 'react';
import { useParams } from 'react-router-dom';

import ResultsBlock from '../../Components/ResultsBlock/ResultsBlock';
import { useStore } from '../../State/use-store';
import { useStyles } from './Results.style';

function Results() {
  const classes = useStyles();
  const { id } = useParams();
  const { stateSurveyAnswer, stateSurvey } = useStore();
  const answers = stateSurveyAnswer.filter(
    surveyAnswers => surveyAnswers.survey.id === id
  );

  const [survey] = stateSurvey.filter(
    item => item.id === id
  );

  return (
    <div className={classes.container}>
      <ResultsBlock answers={answers} surveyTitle={survey.title} />
    </div>
  );
}

export default Results;
