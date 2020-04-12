import React from 'react';
import PropTypes from 'prop-types';
// material ui
import { Card } from '@material-ui/core';
// components
import SurveyAnswers from '../SurveyAnswers';

import { useStyles } from './SurveyQuestion.style';

function SurveyQuestion({
  question,
  answerType,
  inputType,
  answers,
  hasLastInput,
  startValue,
  endValue,
  stepValue
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card>
        <div>{question}</div>

        <SurveyAnswers answers={answers} answerType={answerType} />
      </Card>
    </div>
  );
}

SurveyQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answerType: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  answers: PropTypes.array.isRequired,
  hasLastInput: PropTypes.bool,
  startValue: PropTypes.string,
  endValue: PropTypes.string,
  stepValue: PropTypes.string
};

export default SurveyQuestion;
