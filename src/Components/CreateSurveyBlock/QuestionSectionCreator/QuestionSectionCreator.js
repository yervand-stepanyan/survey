import React from 'react';
import PropTypes from 'prop-types';

import AnswerTypes from '../AnswerTypes';
import Question from '../Question';
import QuestionCreator from '../QuestionCreator';
import { useStyles } from './QuestionSectionCreator.style';

function QuestionSectionCreator({
  activeId,
  answers,
  answerType,
  endValue,
  handleAddQuestion,
  handleCancelQuestion,
  handleEditQuestion,
  handleRemoveQuestion,
  hasLastInput,
  index,
  inputType,
  isQuestionEdit,
  question,
  questionsLength,
  startValue,
  stepValue
}) {
  const classes = useStyles();

  return (
    <div className={classes.questionSectionCreatorContainer}>
      <div className={classes.questionSection}>
        {isQuestionEdit ? (
          <QuestionCreator
            activeId={activeId}
            handleAddQuestion={handleAddQuestion}
            handleCancelQuestion={handleCancelQuestion}
            question={question}
            questionsLength={questionsLength}
          />
        ) : (
          <Question
            activeId={activeId}
            handleEditQuestion={handleEditQuestion}
            handleRemoveQuestion={handleRemoveQuestion}
            index={index}
            question={question}
          />
        )}
      </div>
      <div className={classes.answerTypesWrapper}>
        {question ? (
          <AnswerTypes
            activeId={activeId}
            answers={answers}
            answerType={answerType}
            endValue={endValue}
            hasLastInput={hasLastInput}
            inputType={inputType}
            startValue={startValue}
            stepValue={stepValue}
          />
        ) : null}
      </div>
    </div>
  );
}

QuestionSectionCreator.propTypes = {
  activeId: PropTypes.string,
  answers: PropTypes.array,
  answerType: PropTypes.string,
  endValue: PropTypes.string,
  handleAddQuestion: PropTypes.func.isRequired,
  handleCancelQuestion: PropTypes.func,
  handleEditQuestion: PropTypes.func.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
  hasLastInput: PropTypes.bool,
  index: PropTypes.number.isRequired,
  inputType: PropTypes.string,
  isQuestionEdit: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  questionsLength: PropTypes.number,
  startValue: PropTypes.string,
  stepValue: PropTypes.string
};

QuestionSectionCreator.defaultProps = {
  activeId: '',
  answers: undefined,
  answerType: '',
  endValue: '',
  handleCancelQuestion: undefined,
  hasLastInput: false,
  inputType: '',
  questionsLength: 0,
  startValue: '',
  stepValue: ''
};

export default QuestionSectionCreator;
