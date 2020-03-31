import React, { useContext, useReducer } from 'react';

import AnswerTypes from '../AnswerTypes';
import Question from '../Question';
import QuestionCreator from '../QuestionCreator';
import { questionReducer } from '../../../State/reducer';
import SurveyContext from '../../../State/context';
import { useStyles } from './QuestionSection.style';

function QuestionSection() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(questionReducer, {
    question: '',
    isQuestion: false
  });
  const { isQuestion } = state;
  const { surveyState, surveyDispatch } = useContext(SurveyContext);
  const { question } = surveyState;

  return (
    <div className={classes.container}>
      <SurveyContext.Provider
        value={{ state, dispatch, surveyState, surveyDispatch }}
      >
        <div className={classes.questionSection}>
          {!isQuestion ? <QuestionCreator /> : <Question />}
        </div>
        <div className={classes.answerTypesWrapper}>
          {question ? <AnswerTypes /> : null}
        </div>
      </SurveyContext.Provider>
    </div>
  );
}

export default QuestionSection;
