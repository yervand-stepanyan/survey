import React, { useReducer, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import AddNewQuestion from '../AddNewQuestion';
import { questionsReducer } from '../../../State/reducer';
import QuestionSectionCreator from '../QuestionSectionCreator';
import SurveyContext from '../../../State/context';
import { useStyles } from './QuestionSection.style';

function QuestionSection({ isQuestionSet }) {
  const classes = useStyles();
  const [activeId, setActiveId] = useState('');
  const [isAddNew, setIsAddNew] = useState(false);
  const [isCreator, setIsCreator] = useState(true);
  const [questionValue, setQuestionValue] = useState('');
  const [existsQuestion, setExistsQuestion] = useState(false);
  const [stateQuestions, dispatchQuestions] = useReducer(questionsReducer, []);
  const { stateSurvey, dispatchSurvey, disableSave } = useContext(
    SurveyContext
  );
  const { questions } = stateSurvey;

  // console.log(stateQuestions);

  useEffect(() => {
    isQuestionSet(true);
  }, [isQuestionSet]);

  const handleAddQuestion = questionFromCreator => {
    if (activeId) {
      dispatchQuestions({
        type: 'EDIT_QUESTION',
        payload: { id: activeId, question: questionFromCreator }
      });

      // dispatchSurvey({ type: 'ADD_QUESTION', payload: stateQuestions });
    } else {
      const id = activeId || uuid();
      const questionData = { id, question: questionFromCreator };

      dispatchQuestions({ type: 'ADD_QUESTION', payload: questionData });

      setActiveId(id);

      setExistsQuestion(true);

      setQuestionValue(questionFromCreator);
    }
  };

  const handleEditQuestion = id => {
    const questionToEdit = stateQuestions.find(
      singleQuestion => singleQuestion.id === id
    );

    dispatchQuestions({
      type: 'TOGGLE_EDIT',
      payload: { id: questionToEdit.id }
    });

    // dispatchSurvey({ type: 'TOGGLE_EDIT', payload: { id: questionToEdit.id } });

    setExistsQuestion(false);

    setActiveId(questionToEdit.id);
  };

  const handleRemoveQuestion = id => {
    dispatchQuestions({ type: 'REMOVE_QUESTION', payload: id });

    dispatchSurvey({ type: 'REMOVE_QUESTION', payload: id });
  };

  const handleAddAnswerType = type => {
    dispatchQuestions({
      type: 'ADD_ANSWER_TYPE',
      payload: { id: activeId, type }
    });
  };

  const handleAddInputType = type => {
    dispatchQuestions({
      type: 'ADD_INPUT_TYPE',
      payload: {
        id: activeId,
        type
      }
    });
  };

  const handleAddAnswers = answers => {
    dispatchQuestions({
      type: 'ADD_ANSWERS',
      payload: { id: activeId, answers }
    });
  };

  const handleHasLastInput = bool => {
    dispatchQuestions({
      type: 'HAS_LAST_INPUT',
      payload: { id: activeId, hasLastInput: bool }
    });
  };

  const handleAddRangeValues = range => {
    dispatchQuestions({
      type: 'ADD_RANGE_VALUES',
      payload: { id: activeId, range }
    });
  };

  const handleSubmitQuestion = () => {
    dispatchSurvey({ type: 'ADD_QUESTION', payload: stateQuestions });

    setIsCreator(false);

    setIsAddNew(true);

    setQuestionValue('');

    setExistsQuestion(false);
  };

  const handleShowAddNew = bool => {
    setIsAddNew(bool);

    setIsCreator(true);

    setActiveId('');
  };

  return (
    <div className={classes.questionSectionContainer}>
      <SurveyContext.Provider
        value={{
          stateQuestions,
          dispatchQuestions,
          handleAddAnswerType,
          handleAddAnswers,
          handleAddInputType,
          handleAddRangeValues,
          handleHasLastInput,
          handleSubmitQuestion,
          disableSave
        }}
      >
        {questions && questions.length === stateQuestions.length
          ? stateQuestions.map(
              (
                {
                  id,
                  question,
                  isQuestion,
                  answerType,
                  inputType,
                  answers,
                  hasLastInput,
                  startValue,
                  endValue,
                  stepValue
                },
                index
              ) => (
                <QuestionSectionCreator
                  activeId={id}
                  addQuestion={handleAddQuestion}
                  isQuestion={isQuestion}
                  key={id}
                  onEdit={handleEditQuestion}
                  onRemove={handleRemoveQuestion}
                  question={question}
                  answerType={answerType}
                  inputType={inputType}
                  answers={answers}
                  hasLastInput={hasLastInput}
                  startValue={startValue}
                  endValue={endValue}
                  stepValue={stepValue}
                  index={index}
                />
              )
            )
          : null}
        {isCreator ? (
          <QuestionSectionCreator
            activeId={activeId}
            addQuestion={handleAddQuestion}
            isQuestion={existsQuestion}
            onEdit={handleEditQuestion}
            onRemove={handleRemoveQuestion}
            question={questionValue}
          />
        ) : null}
        {isAddNew ? (
          <AddNewQuestion handleShowAddNew={handleShowAddNew} />
        ) : null}
      </SurveyContext.Provider>
    </div>
  );
}

QuestionSection.propTypes = {
  isQuestionSet: PropTypes.func.isRequired
};

export default QuestionSection;
