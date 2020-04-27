import React from 'react';
import { useParams } from 'react-router-dom';

import ResultsBlock from '../../Components/ResultsBlock/ResultsBlock';
import { useStore } from '../../State/use-store';
import { useStyles } from './Results.style';

function Results() {
  const classes = useStyles();
  const { id } = useParams();
  const { stateSurveyAnswer } = useStore();
  const answers = stateSurveyAnswer.filter(
    surveyAnswers => surveyAnswers.survey.id === id
  );
  const survey = answers.length ? answers[0].survey : {};

  return (
    <div className={classes.container}>
      <ResultsBlock answers={answers} survey={survey} />
    </div>
  );
}

export default Results;
