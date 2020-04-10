import React, { useReducer, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import AddNewQuestion from '../AddNewQuestion';
import { questionsReducer } from '../../../State/reducer';
import QuestionSectionCreator from '../QuestionSectionCreator';
import SurveyContext from '../../../State/context';
import { useStyles } from './QuestionSection.style';

function QuestionSection({ isQuestionSet, updateQuestionsList }) {
  const classes = useStyles();
  const [questionValue] = useState('');
  const [questionExists] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [stateQuestions, dispatchQuestions] = useReducer(questionsReducer, []);
  const [isShowAddNew, setIsShowAddNew] = useState(false);
  const [isShowCreator, setIsShowCreator] = useState(true);

  useEffect(() => {
    isQuestionSet(true);
  }, [isQuestionSet]);

  useEffect(() => {
    updateQuestionsList(stateQuestions);
  }, [stateQuestions]);

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

      setIsShowAddNew(true);

      setIsShowCreator(false);
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
  };

  const handleShowAddNew = bool => {
    setIsShowAddNew(bool);

    setIsShowCreator(true);

    setActiveId('');
  };

  return (
    <div className={classes.questionSectionContainer}>
      <SurveyContext.Provider value={{ stateQuestions, dispatchQuestions }}>
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
        {isShowCreator ? (
          <QuestionSectionCreator
            activeId={activeId}
            addQuestion={handleAddQuestion}
            isQuestion={questionExists}
            onEdit={handleEditQuestion}
            onRemove={handleRemoveQuestion}
            question={questionValue}
          />
        ) : null}
        {isShowAddNew ? (
          <AddNewQuestion handleShowAddNew={handleShowAddNew} />
        ) : null}
      </SurveyContext.Provider>
    </div>
  );
}

QuestionSection.propTypes = {
  isQuestionSet: PropTypes.func.isRequired,
  updateQuestionsList: PropTypes.func.isRequired
};

export default QuestionSection;
