import React, { useReducer, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import AddNewQuestion from '../AddNewQuestion';
import { questionsReducer } from '../../../State/reducer';
import QuestionSectionCreator from '../QuestionSectionCreator';
import SurveyContext from '../../../State/context';
import { useStyles } from './QuestionSection.style';

function QuestionSection({ enableSave, isQuestionSet }) {
  const classes = useStyles();
  const [activeId, setActiveId] = useState('');
  const [isAddNew, setIsAddNew] = useState(false);
  const [isCreator, setIsCreator] = useState(true);
  const [questionValue] = useState('');
  const [questionExists, setQuestionExists] = useState(false);
  const [stateQuestions, dispatchQuestions] = useReducer(questionsReducer, []);
  const { dispatchSurvey } = useContext(SurveyContext);

  useEffect(() => {
    isQuestionSet(true);
  }, [isQuestionSet]);

  const handleAddQuestion = questionFromCreator => {
    if (activeId) {
      dispatchQuestions({
        type: 'EDIT_QUESTION',
        payload: { id: activeId, question: questionFromCreator }
      });
    } else {
      const id = activeId || uuid();
      const questionData = { id, question: questionFromCreator };

      dispatchQuestions({ type: 'ADD_QUESTION', payload: questionData });

      setActiveId(id);

      setQuestionExists(true);

      setIsCreator(false);
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

    enableSave(true);
  };

  const handleSubmitQuestion = () => {
    dispatchSurvey({ type: 'ADD_QUESTION', payload: stateQuestions });

    setIsAddNew(true);
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

  const handleShowAddNew = bool => {
    setIsAddNew(bool);

    setIsCreator(true);

    setActiveId('');

    enableSave(false);
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
          handleHasLastInput,
          handleSubmitQuestion
        }}
      >
        {stateQuestions.map(({ id, question, isQuestion }) => (
          <QuestionSectionCreator
            activeId={id}
            addQuestion={handleAddQuestion}
            isQuestion={isQuestion}
            key={id}
            onEdit={handleEditQuestion}
            onRemove={handleRemoveQuestion}
            question={question}
          />
        ))}
        {isCreator ? (
          <QuestionSectionCreator
            activeId={activeId}
            addQuestion={handleAddQuestion}
            isQuestion={questionExists}
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
  enableSave: PropTypes.func.isRequired,
  isQuestionSet: PropTypes.func.isRequired
};

export default QuestionSection;
