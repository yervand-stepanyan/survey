import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent } from '@material-ui/core';

import RadiobuttonAnswers from '../RadiobuttonAnswers';
import CheckboxAnswers from '../CheckboxAnswers';
import DropdownAnswers from '../DropdownAnswers';
import InputAnswers from '../InputAnswers';
import RangeAnswers from '../RangeAnswers';
import { useStyles } from './SurveyQuestion.style';

function SurveyQuestion({
  id,
  title,
  answerType,
  inputType,
  answers,
  hasLastInput,
  startValue,
  endValue,
  stepValue,
  receiveAnswers
}) {
  const pickAnswersType = () => {
    switch (answerType) {
      case 'RADIOBUTTON':
        return (
          <RadiobuttonAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            hasLastInput={hasLastInput}
            receiveAnswers={receiveAnswers}
          />
        );
      case 'CHECKBOX':
        return (
          <CheckboxAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            receiveAnswers={receiveAnswers}
          />
        );
      case 'DROPDOWN':
        return (
          <DropdownAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            receiveAnswers={receiveAnswers}
          />
        );
      case 'RANGE':
        return (
          <RangeAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            startValue={Number(startValue)}
            endValue={Number(endValue)}
            stepValue={Number(stepValue)}
            receiveAnswers={receiveAnswers}
          />
        );
      case 'INPUT':
        return (
          <InputAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            inputType={inputType}
            receiveAnswers={receiveAnswers}
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
        <CardHeader title={title} />

        <CardContent>{pickAnswersType()}</CardContent>
      </Card>
    </div>
  );
}

SurveyQuestion.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  answerType: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  answers: PropTypes.array,
  hasLastInput: PropTypes.bool,
  startValue: PropTypes.string,
  endValue: PropTypes.string,
  stepValue: PropTypes.string,
  receiveAnswers: PropTypes.func.isRequired
};

SurveyQuestion.defaultProps = {
  inputType: '',
  answers: [],
  hasLastInput: false,
  startValue: '',
  endValue: '',
  stepValue: ''
};

export default SurveyQuestion;
