import React from 'react';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardContent } from '@material-ui/core';

import { ANSWER_TYPES } from '../../../Globals/variables';
import CheckboxAnswers from '../CheckboxAnswers';
import DropdownAnswers from '../DropdownAnswers';
import InputAnswers from '../InputAnswers';
import RadiobuttonAnswers from '../RadiobuttonAnswers';
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
  stepValue
}) {
  const classes = useStyles();

  const pickAnswersType = () => {
    switch (answerType) {
      case ANSWER_TYPES.radiobutton:
        return (
          <RadiobuttonAnswers
            answers={answers}
            answerType={answerType}
            hasLastInput={hasLastInput}
            questionId={id}
          />
        );
      case ANSWER_TYPES.checkbox:
        return (
          <CheckboxAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
          />
        );
      case ANSWER_TYPES.dropdown:
        return (
          <DropdownAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
          />
        );
      case ANSWER_TYPES.range:
        return (
          <RangeAnswers
            answers={answers}
            answerType={answerType}
            endValue={Number(endValue)}
            questionId={id}
            startValue={Number(startValue)}
            stepValue={Number(stepValue)}
          />
        );
      case ANSWER_TYPES.input:
        return (
          <InputAnswers
            answers={answers}
            answerType={answerType}
            inputType={inputType}
            questionId={id}
          />
        );
      default:
        return 'No Answer type chosen';
    }
  };
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
  stepValue: PropTypes.string
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
