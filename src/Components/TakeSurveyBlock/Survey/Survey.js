import React from 'react';
import PropTypes from 'prop-types';
// Components
import SurveyQuestions from '../SurveyQuestions';

import { useStyles } from './Survey.style';

function Survey({ survey }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SurveyQuestions questions={survey.questions} />
    </div>
  );
}

Survey.propTypes = {
  survey: PropTypes.object.isRequired
};

export default Survey;
