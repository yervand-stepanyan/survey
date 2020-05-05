import React from 'react';
import PropTypes from 'prop-types';

import NotFoundBlock from '../../NotFoundBlock';
import SurveyQuestions from '../SurveyQuestions';
import { useStyles } from './TakeSurveyBlock.style';

function TakeSurveyBlock({ isConnectionError, survey }) {
  const classes = useStyles();

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

TakeSurveyBlock.propTypes = {
  isConnectionError: PropTypes.bool.isRequired,
  survey: PropTypes.object.isRequired
};

export default TakeSurveyBlock;
