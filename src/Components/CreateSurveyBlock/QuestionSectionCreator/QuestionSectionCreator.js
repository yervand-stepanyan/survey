import React from 'react';
import PropTypes from 'prop-types';

import AnswerTypes from '../AnswerTypes';
import Question from '../Question';
import QuestionCreator from '../QuestionCreator';
import { useStyles } from './QuestionSectionCreator.style';

function QuestionSectionCreator({
  activeId,
  addQuestion,
  isQuestion,
  onEdit,
  onRemove,
  question,
  answerType,
  inputType,
  answers,
  hasLastInput,
  startValue,
  endValue,
  stepValue,
  index
}) {
  const classes = useStyles();

  return (
    <div className={classes.questionSectionCreatorContainer}>
      <div className={classes.questionSection}>
        {isQuestion ? (
          <Question
            activeId={activeId}
            onEdit={onEdit}
            onRemove={onRemove}
            question={question}
            index={index}
          />
        ) : (
          <QuestionCreator addQuestion={addQuestion} question={question} />
        )}
      </div>
      <div className={classes.answerTypesWrapper}>
        {question ? (
          <AnswerTypes
            answerType={answerType}
            inputType={inputType}
            answers={answers}
            hasLastInput={hasLastInput}
            startValue={startValue}
            endValue={endValue}
            stepValue={stepValue}
          />
        ) : null}
      </div>
    </div>
  );
}

QuestionSectionCreator.propTypes = {
  activeId: PropTypes.string.isRequired,
  addQuestion: PropTypes.func.isRequired,
  isQuestion: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answerType: PropTypes.string,
  inputType: PropTypes.string,
  answers: PropTypes.array,
  hasLastInput: PropTypes.bool,
  startValue: PropTypes.string,
  endValue: PropTypes.string,
  stepValue: PropTypes.string,
  index: PropTypes.number.isRequired
};

QuestionSectionCreator.defaultProps = {
  answerType: '',
  inputType: '',
  answers: undefined,
  hasLastInput: false,
  startValue: '',
  endValue: '',
  stepValue: ''
};

export default QuestionSectionCreator;
