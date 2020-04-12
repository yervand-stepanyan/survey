import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './SurveyAnswer.style';

function SurveyAnswer({ id, option }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>{id}</div>
      <div>{option}</div>
    </div>
  );
}

SurveyAnswer.propTypes = {
  id: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired
};

export default SurveyAnswer;
