import React from 'react';
import PropTypes from 'prop-types';
// material ui
import { Card, CardHeader, CardContent } from '@material-ui/core';
// components
import RadiobuttonAnswers from '../RadiobuttonAnswers';
import CheckboxAnswers from '../CheckboxAnswers';

import { useStyles } from './SurveyQuestion.style';

function SurveyQuestion({
  id,
  question,
  answerType,
  inputType,
  answers,
  hasLastInput,
  startValue,
  endValue,
  stepValue
}) {
  const pickAnswersType = answerType => {
    switch (answerType) {
      case 'radiobutton':
        return (
          <RadiobuttonAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
          />
        );
      case 'checkbox':
        return (
          <CheckboxAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
          />
        );
      default:
        return 'no Answer type coosen';
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card>
        <CardHeader title={question} subheader="something" />

        <CardContent>{pickAnswersType(answerType)}</CardContent>
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
