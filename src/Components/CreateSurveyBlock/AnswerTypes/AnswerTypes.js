import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import AnswerOptions from '../AnswerOptions';
import AnswerSection from '../AnswerSection';
import { useStyles } from './AnswerTypes.style';

const TITLE = 'Answer type';

function AnswerTypes({
  answerType,
  inputType,
  answers,
  hasLastInput,
  startValue,
  endValue,
  stepValue
}) {
  const classes = useStyles();
  const [type, setType] = useState('');

  return (
    <div className={classes.answerTypesContainer}>
      <div className={classes.answerTypesTitleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <AnswerOptions setType={setType} answerType={answerType} />
      <AnswerSection
        type={type}
        answerType={answerType}
        inputType={inputType}
        answers={answers}
        hasLastInput={hasLastInput}
        startValue={startValue}
        endValue={endValue}
        stepValue={stepValue}
      />
    </div>
  );
}

AnswerTypes.propTypes = {
  answerType: PropTypes.string,
  inputType: PropTypes.string,
  answers: PropTypes.array,
  hasLastInput: PropTypes.bool,
  startValue: PropTypes.string,
  endValue: PropTypes.string,
  stepValue: PropTypes.string
};

AnswerTypes.defaultProps = {
  answerType: '',
  inputType: '',
  answers: [],
  hasLastInput: false,
  startValue: '',
  endValue: '',
  stepValue: ''
};

export default AnswerTypes;
