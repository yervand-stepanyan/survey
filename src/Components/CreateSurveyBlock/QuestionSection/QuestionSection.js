import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

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

  return (
    <div className={classes.container}>
      <SurveyContext.Provider value={{ state, dispatch }}>
        {!isQuestion ? <QuestionCreator /> : <Question />}
      </SurveyContext.Provider>
    </div>
  );
}

QuestionSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default QuestionSection;
