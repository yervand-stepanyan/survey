import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import _ from 'lodash';

import Card from '@material-ui/core/Card';

import AddNewQuestion from '../AddNewQuestion';
import QuestionSectionCreator from '../QuestionSectionCreator';
import StoreContext from '../../../State/context';
import { useStore } from '../../../State/use-store';
import { useStyles } from './QuestionSection.style';

function QuestionSection({
  handleIsQuestionOpen,
  handleSetQuestions,
  questions
}) {
  const classes = useStyles();
  const [activeId, setActiveId] = useState('');
  const [isQuestionEdit, setIsQuestionEdit] = useState(true);
  const [isQuestionCreator, setIsQuestionCreator] = useState(true);
  const [questionObject, setQuestionObject] = useState({});
  const [questionValue, setQuestionValue] = useState('');
  const [showAddNew, setShowAddNew] = useState(false);
  const {
    disableSave,
    handleIsAnswerSubmitted,
    handleIsQuestionSubmitted
  } = useStore();

  useEffect(() => {
    handleIsQuestionOpen();
  });

  const handleAddQuestion = (id, questionVal) => {
    if (id) {
      handleSetQuestions(
        questions.map(question =>
          question.id === id
            ? { ...question, title: questionVal, isQuestion: false }
            : question
        )
      );

      setQuestionObject({
        ...questionObject,
        id,
        title: questionVal,
        isQuestion: false
      });

      handleIsQuestionSubmitted(true);
    } else {
      const questionId = activeId || uuid();

      setQuestionObject({
        ...questionObject,
        id: questionId,
        title: questionVal,
        isQuestion: false
      });

      setActiveId(questionId);

      setQuestionValue(questionVal);

      setIsQuestionEdit(false);

      handleIsQuestionSubmitted(true);
    }
  };

  const handleCancelQuestion = () => {
    disableSave(false);

    setShowAddNew(true);

    setIsQuestionCreator(false);
  };

  const handleEditQuestion = id => {
    if (id) {
      const questionToEdit = questions.find(
        singleQuestion => singleQuestion.id === id
      );

      handleSetQuestions(
        questions.map(question =>
          question.id === questionToEdit.id
            ? { ...question, isQuestion: true }
            : question
        )
      );

      setQuestionObject({ ...questionObject, isQuestion: true });

      setActiveId(questionToEdit.id);
    } else {
      setIsQuestionEdit(true);
    }

    handleIsQuestionSubmitted(false);
  };

  const handleRemoveQuestion = id => {
    if (id) {
      handleSetQuestions(questions.filter(question => question.id !== id));
    } else {
      setQuestionValue('');

      setActiveId('');

      setIsQuestionEdit(true);

      setIsQuestionCreator(false);

      setShowAddNew(true);
    }

    disableSave(false);

    handleIsAnswerSubmitted(true);
  };

  const handleAddAnswerType = (id, type) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      handleSetQuestions(
        questions.map(question =>
          question.id === currentQuestion.id
            ? {
                ...currentQuestion,
                answers: undefined,
                answerType: type,
                endValue: undefined,
                hasLastInput: false,
                inputType: undefined,
                isAnswerSubmit: false,
                startValue: undefined,
                stepValue: undefined
              }
            : question
        )
      );
    } else {
      setQuestionObject({
        ...questionObject,
        answerType: type,
        inputType: undefined,
        answers: undefined,
        hasLastInput: false,
        startValue: undefined,
        endValue: undefined,
        stepValue: undefined
      });
    }

    handleIsAnswerSubmitted(false);
  };

  const handleAddInputType = (id, type) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      handleSetQuestions(
        questions.map(question =>
          question.id === currentQuestion.id
            ? {
                ...currentQuestion,
                inputType: type,
                isAnswerSubmit: false
              }
            : question
        )
      );
    } else {
      setQuestionObject({ ...questionObject, inputType: type });
    }

    handleIsAnswerSubmitted(false);
  };

  const handleAddAnswers = (id, answers, checked) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      handleSetQuestions(
        questions.map(question =>
          question.id === currentQuestion.id
            ? {
                ...currentQuestion,
                answers,
                hasLastInput: checked,
                isAnswerSubmit: _.isEqual(question.answers, answers)
              }
            : question
        )
      );

      handleIsAnswerSubmitted(_.isEqual(currentQuestion.answers, answers));
    } else {
      setQuestionObject({ ...questionObject, answers, hasLastInput: checked });
    }
  };

  const handleHasLastInput = (id, bool, answers) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      if (answers) {
        handleSetQuestions(
          questions.map(question =>
            question.id === currentQuestion.id
              ? {
                  ...currentQuestion,
                  answers,
                  hasLastInput: bool,
                  isAnswerSubmit: false
                }
              : question
          )
        );
      } else {
        handleSetQuestions(
          questions.map(question =>
            question.id === currentQuestion.id
              ? {
                  ...currentQuestion,
                  hasLastInput: bool,
                  isAnswerSubmit: false
                }
              : question
          )
        );
      }
    } else if (answers) {
      setQuestionObject({ ...questionObject, answers, hasLastInput: bool });
    } else {
      setQuestionObject({ ...questionObject, hasLastInput: bool });
    }

    handleIsAnswerSubmitted(false);
  };

  const handleAddRangeValues = (id, range) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      setQuestionObject({
        ...currentQuestion,
        startValue: range.startValue,
        endValue: range.endValue,
        stepValue: range.stepValue
      });
    } else {
      setQuestionObject({
        ...questionObject,
        startValue: range.startValue,
        endValue: range.endValue,
        stepValue: range.stepValue
      });
    }

    handleIsAnswerSubmitted(false);
  };

  const handleSubmitQuestion = id => {
    if (id) {
      handleSetQuestions(
        questions.map(question =>
          question.id === id ? { ...question, isAnswerSubmit: true } : question
        )
      );
    } else {
      handleSetQuestions(
        questions &&
          questions.some(question => question.id === questionObject.id)
          ? questions.map(question =>
              question.id === questionObject.id
                ? { ...questionObject, isAnswerSubmit: true }
                : question
            )
          : [...questions, { ...questionObject, isAnswerSubmit: true }]
      );
    }

    disableSave(false);

    handleIsAnswerSubmitted(true);

    setIsQuestionCreator(false);

    setShowAddNew(true);

    setQuestionValue('');

    setIsQuestionEdit(true);

    setQuestionObject({});
  };

  const handleAddNewQuestion = () => {
    disableSave(true);

    setShowAddNew(false);

    setIsQuestionCreator(true);

    setActiveId('');
  };

  return (
    <Card className={classes.questionSectionContainer}>
      <StoreContext.Provider
        value={{
          disableSave,
          handleAddAnswers,
          handleAddAnswerType,
          handleAddInputType,
          handleAddRangeValues,
          handleHasLastInput,
          handleSubmitQuestion
        }}
      >
        {questions.length
          ? questions.map(
              (
                {
                  answers,
                  answerType,
                  endValue,
                  hasLastInput,
                  id,
                  inputType,
                  isQuestion,
                  startValue,
                  stepValue,
                  title
                },
                index
              ) => (
                <QuestionSectionCreator
                  activeId={id}
                  answers={answers}
                  answerType={answerType}
                  endValue={endValue}
                  handleAddQuestion={handleAddQuestion}
                  handleEditQuestion={handleEditQuestion}
                  handleRemoveQuestion={handleRemoveQuestion}
                  hasLastInput={hasLastInput}
                  index={index}
                  inputType={inputType}
                  isQuestionEdit={isQuestion}
                  key={id}
                  question={title}
                  startValue={startValue}
                  stepValue={stepValue}
                />
              )
            )
          : null}
        {isQuestionCreator ? (
          <QuestionSectionCreator
            handleAddQuestion={handleAddQuestion}
            handleCancelQuestion={handleCancelQuestion}
            handleEditQuestion={handleEditQuestion}
            handleRemoveQuestion={handleRemoveQuestion}
            index={questions ? questions.length : 0}
            isQuestionEdit={isQuestionEdit}
            question={questionValue}
            questionsLength={questions ? questions.length : 0}
          />
        ) : null}
        {showAddNew ? (
          <AddNewQuestion handleAddNewQuestion={handleAddNewQuestion} />
        ) : null}
      </StoreContext.Provider>
    </Card>
  );
}

QuestionSection.propTypes = {
  handleIsQuestionOpen: PropTypes.func.isRequired,
  handleSetQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
};

export default QuestionSection;
