import React, { useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import AnswerTypes from '../AnswerTypes';
import Question from '../Question';
import QuestionCreator from '../QuestionCreator';
import { questionReducer } from '../../../State/reducer';
import SurveyContext from '../../../State/context';

function QuestionSection({ classes }) {
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
        {!isQuestion ? <QuestionCreator /> : <Question />}
        <div className={classes.answerTypesWrapper}>
          {question ? <AnswerTypes /> : null}
        </div>
      </SurveyContext.Provider>
    </div>
  );
}

QuestionSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default QuestionSection;
