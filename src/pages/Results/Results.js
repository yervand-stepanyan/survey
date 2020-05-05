import React from 'react';
import { useParams } from 'react-router-dom';

import Loader from '../../components/Loader';
import { LOADER_TYPE } from '../../globals/constants';
import ResultsBlock from '../../components/ResultsBlock/ResultsBlock';
import { useStore } from '../../state/use-store';
import { useStyles } from './Results.style';

function Results() {
  const classes = useStyles();
  const { id } = useParams();
  const {
    isConnectionError,
    loadingData,
    stateSurvey,
    stateSurveyAnswer
  } = useStore();
  const answers = stateSurveyAnswer.filter(
    surveyAnswers => surveyAnswers.survey.id === id
  );
  const survey = stateSurvey.find(item => item.id === id);
  const surveyTitle = survey ? survey.title : '';

  return (
    <div className={classes.resultsContainer}>
      {loadingData ? (
        <Loader type={LOADER_TYPE.page} />
      ) : (
        <ResultsBlock
          answers={answers}
          isConnectionError={isConnectionError}
          surveyTitle={surveyTitle}
        />
      )}
    </div>
  );
}

export default Results;
