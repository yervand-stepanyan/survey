import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import AnswerOptions from '../AnswerOptions';
import AnswerSection from '../AnswerSection';
import { TEXT_LABELS } from '../../../globals/constants';
import { useStyles } from './AnswerTypes.style';

function AnswerTypes({
  activeId,
  answers,
  answerType,
  endValue,
  hasLastInput,
  inputType,
  startValue,
  stepValue
}) {
  const classes = useStyles();
  const [type, setType] = useState('');

  return (
    <Card className={classes.answerTypesContainer}>
      <div className={classes.answerTypesTitleWrapper}>
        <Typography variant="h5">
          {TEXT_LABELS.answerTypeSectionTitle}
        </Typography>
      </div>
      <AnswerOptions
        activeId={activeId}
        answerType={answerType}
        setType={setType}
      />
      <AnswerSection
        activeId={activeId}
        answers={answers}
        answerType={answerType}
        endValue={endValue}
        hasLastInput={hasLastInput}
        inputType={inputType}
        startValue={startValue}
        stepValue={stepValue}
        type={type}
      />
    </Card>
  );
}

AnswerTypes.propTypes = {
  activeId: PropTypes.string.isRequired,
  answers: PropTypes.array,
  answerType: PropTypes.string,
  endValue: PropTypes.string,
  hasLastInput: PropTypes.bool,
  inputType: PropTypes.string,
  startValue: PropTypes.string,
  stepValue: PropTypes.string
};

AnswerTypes.defaultProps = {
  answers: undefined,
  answerType: '',
  endValue: '',
  hasLastInput: false,
  inputType: '',
  startValue: '',
  stepValue: ''
};

export default AnswerTypes;
