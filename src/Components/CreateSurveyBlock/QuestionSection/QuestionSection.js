import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import AddNewQuestion from '../AddNewQuestion';
import QuestionSectionCreator from '../QuestionSectionCreator';
import SurveyContext from '../../../State/context';
import { useStyles } from './QuestionSection.style';

function QuestionSection({ handleIsQuestion, handleSetQuestions, questions }) {
  const classes = useStyles();
  const [activeId, setActiveId] = useState('');
  const [isQuestionEdit, setIsQuestionEdit] = useState(true);
  const [isQuestionCreator, setIsQuestionCreator] = useState(true);
  const [questionObject, setQuestionObject] = useState({});
  const [questionValue, setQuestionValue] = useState('');
  const [showAddNew, setShowAddNew] = useState(false);
  const { disableSave } = useContext(SurveyContext);

  useEffect(() => {
    handleIsQuestion();
  });

  const handleAddQuestion = (id, questionVal) => {
    if (id) {
      handleSetQuestions(
        questions.map(question =>
          question.id === activeId
            ? { ...question, title: questionVal, isQuestion: false }
            : question
        )
      );

      disableSave(false);
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

      disableSave(true);
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
    }

    setIsQuestionEdit(true);

    disableSave(true);
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
  };

  const handleAddAnswerType = (id, type) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      handleSetQuestions(
        questions.map(question =>
          question.id === currentQuestion.id
            ? {
                ...currentQuestion,
                answerType: type,
                inputType: undefined,
                answers: undefined,
                hasLastInput: false,
                startValue: undefined,
                endValue: undefined,
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
  };

  const handleAddInputType = (id, type) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      setQuestionObject({ ...currentQuestion, inputType: type });
    } else {
      setQuestionObject({ ...questionObject, inputType: type });
    }
  };

  const handleAddAnswers = (id, answers, checked) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      setQuestionObject({ ...currentQuestion, answers, hasLastInput: checked });
    } else {
      setQuestionObject({ ...questionObject, answers, hasLastInput: checked });
    }
  };

  const handleHasLastInput = (id, bool, answers) => {
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      if (answers) {
        setQuestionObject({ ...currentQuestion, answers, hasLastInput: bool });
      } else {
        setQuestionObject({ ...currentQuestion, hasLastInput: bool });
      }
    } else if (answers) {
      setQuestionObject({ ...questionObject, answers, hasLastInput: bool });
    } else {
      setQuestionObject({ ...questionObject, hasLastInput: bool });
    }
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
  };

  const handleSubmitQuestion = () => {
    handleSetQuestions(
      questions && questions.some(question => question.id === questionObject.id)
        ? questions.map(question =>
            question.id === questionObject.id ? questionObject : question
          )
        : [...questions, questionObject]
    );

    disableSave(false);

    setIsQuestionCreator(false);

    setShowAddNew(true);

    setQuestionValue('');

    setIsQuestionEdit(true);

    setQuestionObject({});
  };

  const handleShowAddNew = () => {
    disableSave(true);

    setShowAddNew(false);

    setIsQuestionCreator(true);

    setActiveId('');
  };

  return (
    <div className={classes.questionSectionContainer}>
      <SurveyContext.Provider
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
          <AddNewQuestion handleShowAddNew={handleShowAddNew} />
        ) : null}
      </SurveyContext.Provider>
    </div>
  );
}

QuestionSection.propTypes = {
  handleIsQuestion: PropTypes.func.isRequired,
  handleSetQuestions: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired
};

export default QuestionSection;
