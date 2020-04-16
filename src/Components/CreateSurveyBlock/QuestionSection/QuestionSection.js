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
  }, []);

  const handleAddQuestion = (id, questionVal) => {
    if (id) {
      handleSetQuestions(
        questions.map(question =>
          question.id === activeId
            ? { ...question, question: questionVal, isQuestion: false }
            : question
        )
      );

      disableSave(false);
    } else {
      const questionId = activeId || uuid();

      setQuestionObject({
        ...questionObject,
        id: questionId,
        question: questionVal,
        isQuestion: false
      });

      setActiveId(questionId);

      setQuestionValue(questionVal);

      setIsQuestionEdit(false);

      disableSave(true);
    }
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

  const handleAddAnswerType = type => {
    handleSetQuestions(
      questions.map(question =>
        question.id === activeId
          ? {
              ...question,
              answerType: type,
              inputType: undefined,
              answers: undefined,
              hasLastInput: undefined,
              startValue: undefined,
              endValue: undefined,
              stepValue: undefined
            }
          : question
      )
    );

    setQuestionObject({
      ...questionObject,
      answerType: type,
      inputType: undefined,
      answers: undefined,
      hasLastInput: undefined,
      startValue: undefined,
      endValue: undefined,
      stepValue: undefined
    });
  };

  const handleAddInputType = (id, type) => {
    // handleSetQuestions(
    //   questions.map(question =>
    //     question.id === activeId
    //       ? {
    //           ...question,
    //           inputType: type
    //         }
    //       : question
    //   )
    // );
    if (id) {
      const currentQuestion = questions.find(question => question.id === id);

      setQuestionObject({ ...currentQuestion, inputType: type });
    } else {
      setQuestionObject({ ...questionObject, inputType: type });
    }
  };

  const handleAddAnswers = answers => {
    handleSetQuestions(
      questions.map(question =>
        question.id === activeId
          ? {
              ...question,
              answers
            }
          : question
      )
    );

    setQuestionObject({ ...questionObject, answers });
  };

  const handleHasLastInput = (bool, answers) => {
    if (answers) {
      handleSetQuestions(
        questions.map(question =>
          question.id === activeId
            ? {
                ...question,
                answers,
                hasLastInput: bool
              }
            : question
        )
      );

      setQuestionObject({ ...questionObject, answers, hasLastInput: bool });
    } else {
      handleSetQuestions(
        questions.map(question =>
          question.id === activeId
            ? {
                ...question,
                hasLastInput: bool
              }
            : question
        )
      );

      setQuestionObject({ ...questionObject, hasLastInput: bool });
    }
  };

  const handleAddRangeValues = range => {
    handleSetQuestions(
      questions.map(question =>
        question.id === activeId
          ? {
              ...question,
              startValue: range.startValue,
              endValue: range.endValue,
              stepValue: range.stepValue
            }
          : question
      )
    );

    setQuestionObject({
      ...questionObject,
      startValue: range.startValue,
      endValue: range.endValue,
      stepValue: range.stepValue
    });
  };

  const handleSubmitQuestion = params => {
    if (params && params.type === 'answers') {
      handleSetQuestions([
        ...questions,
        { ...questionObject, answers: params.answers }
      ]);
    } else if (params && params.type === 'range') {
      handleSetQuestions([
        ...questions,
        {
          ...questionObject,
          startValue: params.range.startValue,
          endValue: params.range.endValue,
          stepValue: params.range.stepValue
        }
      ]);
    } else {
      handleSetQuestions(
        questions &&
          questions.some(question => question.id === questionObject.id)
          ? questions.map(question =>
              question.id === questionObject.id
                ? {
                    ...question,
                    inputType: questionObject.inputType
                  }
                : question
            )
          : [...questions, questionObject]
      );
    }

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
                  question,
                  startValue,
                  stepValue
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
                  question={question}
                  startValue={startValue}
                  stepValue={stepValue}
                />
              )
            )
          : null}
        {isQuestionCreator ? (
          <QuestionSectionCreator
            handleAddQuestion={handleAddQuestion}
            handleEditQuestion={handleEditQuestion}
            handleRemoveQuestion={handleRemoveQuestion}
            index={questions ? questions.length : 0}
            isQuestionEdit={isQuestionEdit}
            question={questionValue}
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
