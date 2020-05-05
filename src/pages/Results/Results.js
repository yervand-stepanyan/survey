import React from 'react';
import { useParams } from 'react-router-dom';

import PageLoader from '../../components/Loaders/PageLoader';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import { useStore } from '../../state/use-store';
import { useStyles } from './Results.style';

function Results() {
  const classes = useStyles();
  const { id } = useParams();
  const { loadingData, stateSurvey, stateSurveyAnswer } = useStore();
  const answers = stateSurveyAnswer.filter(
    surveyAnswers => surveyAnswers.survey.id === id
  );
  const survey = stateSurvey.find(item => item.id === id);
  const surveyTitle = survey ? survey.title : '';

  return (
    <div className={classes.resultsContainer}>
      {loadingData ? (
        <PageLoader />
      ) : (
        <ResultsBlock answers={answers} surveyTitle={surveyTitle} />
      )}
    </div>
  );
}

export default Results;
