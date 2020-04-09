import React, { useReducer, useState } from 'react';
import uuid from 'react-uuid';

import AddNewQuestion from '../AddNewQuestion';
import { questionsReducer } from '../../../State/reducer';
import QuestionSectionCreator from '../QuestionSectionCreator';
import SurveyContext from '../../../State/context';
import { useStyles } from './QuestionSection.style';

function QuestionSection() {
  const classes = useStyles();
  const [question, setQuestion] = useState('');
  const [isQuestion, setIsQuestion] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [stateQuestions, dispatchQuestions] = useReducer(questionsReducer, []);

  const addQuestion = questionFromCreator => {
    setQuestion(questionFromCreator);

    setIsQuestion(true);

    if (activeId)
      dispatchQuestions({
        type: 'EDIT_QUESTION',
        payload: { id: activeId, question: questionFromCreator }
      });
    else {
      const id = activeId || uuid();
      const questionData = { id, question: questionFromCreator };

      dispatchQuestions({ type: 'ADD_QUESTION', payload: questionData });

      setActiveId(id);
    }
  };

  const editQuestion = id => {
    const questionToEdit = stateQuestions.find(
      singleQuestion => singleQuestion.id === id
    );

    setActiveId(questionToEdit.id);

    setIsQuestion(false);
  };

  return (
    <div className={classes.questionSectionContainer}>
      <SurveyContext.Provider value={{ stateQuestions, dispatchQuestions }}>
        <QuestionSectionCreator
          activeId={activeId}
          addQuestion={addQuestion}
          isQuestion={isQuestion}
          onEdit={editQuestion}
          question={question}
          setIsQuestion={setIsQuestion}
          setQuestion={setQuestion}
        />
        {question ? <AddNewQuestion /> : null}
      </SurveyContext.Provider>
    </div>
  );
}

export default QuestionSection;
