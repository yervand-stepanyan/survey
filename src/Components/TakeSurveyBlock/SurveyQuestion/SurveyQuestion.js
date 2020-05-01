import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import { ANSWER_TYPES, TEXT_LABELS } from '../../../Globals/variables';
import CheckboxAnswers from '../CheckboxAnswers';
import DropdownAnswers from '../DropdownAnswers';
import InputAnswers from '../InputAnswers';
import RadiobuttonAnswers from '../RadiobuttonAnswers';
import RangeAnswers from '../RangeAnswers';
import { useStyles } from './SurveyQuestion.style';

function SurveyQuestion({
  answers,
  answerType,
  endValue,
  hasLastInput,
  id,
  inputType,
  receiveAnswers,
  startValue,
  stepValue,
  title
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
            receiveAnswers={receiveAnswers}
          />
        );
      case ANSWER_TYPES.checkbox:
        return (
          <CheckboxAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            receiveAnswers={receiveAnswers}
          />
        );
      case ANSWER_TYPES.dropdown:
        return (
          <DropdownAnswers
            answers={answers}
            answerType={answerType}
            questionId={id}
            receiveAnswers={receiveAnswers}
          />
        );
      case ANSWER_TYPES.range:
        return (
          <RangeAnswers
            answers={answers}
            answerType={answerType}
            endValue={Number(endValue)}
            questionId={id}
            receiveAnswers={receiveAnswers}
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
            receiveAnswers={receiveAnswers}
          />
        );
      default:
        return TEXT_LABELS.surveyQuestionNoAnswerTypeChosen;
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
  answers: PropTypes.array,
  answerType: PropTypes.string.isRequired,
  endValue: PropTypes.string,
  hasLastInput: PropTypes.bool,
  id: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  receiveAnswers: PropTypes.func.isRequired,
  startValue: PropTypes.string,
  stepValue: PropTypes.string,
  title: PropTypes.string.isRequired
};

SurveyQuestion.defaultProps = {
  answers: [],
  endValue: '',
  hasLastInput: false,
  inputType: '',
  startValue: '',
  stepValue: ''
};

export default SurveyQuestion;
