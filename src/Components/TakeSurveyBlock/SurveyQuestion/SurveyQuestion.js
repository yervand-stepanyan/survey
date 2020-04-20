import React from 'react';
import PropTypes from 'prop-types';
// material ui
import { Card, CardHeader, CardContent } from '@material-ui/core';
// components
import RadiobuttonAnswers from '../RadiobuttonAnswers';
import CheckboxAnswers from '../CheckboxAnswers';
import DropdownAnswers from '../DropdownAnswers';
import InputAnswers from '../InputAnswers';
import RangeAnswers from '../RangeAnswers';

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
            hasLastInput={hasLastInput}
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
      case 'dropdown':
        return (
          <DropdownAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
          />
        );
      case 'range':
        return (
          <RangeAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            startValue={Number(startValue)}
            endValue={Number(endValue)}
            stepValue={Number(stepValue)}
          />
        );
      case 'input':
        return (
          <InputAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            inputType={inputType}
          />
        );
      default:
        return 'No Answer type chosen';
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardHeader title={question} />

        <CardContent>{pickAnswersType(answerType)}</CardContent>
      </Card>
    </div>
  );
}

SurveyQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  answerType: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  answers: PropTypes.array.isRequired,
  hasLastInput: PropTypes.bool,
  startValue: PropTypes.string,
  endValue: PropTypes.string,
  stepValue: PropTypes.string
};

export default SurveyQuestion;
