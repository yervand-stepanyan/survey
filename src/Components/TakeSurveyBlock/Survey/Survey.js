import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// Components
import SurveyQuestions from '../SurveyQuestions';

import { useStyles } from './Survey.style';

function Survey({ surveys, match }) {
  const classes = useStyles();

  const { id } = match.params;

  const chosenSurvey = surveys.find(item => {
    return item.surveyId === id;
  });

  return (
    <div className={classes.container}>
      <SurveyQuestions questions={chosenSurvey.questions} />
    </div>
  );
}

Survey.propTypes = {
  surveys: PropTypes.array.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(Survey);
