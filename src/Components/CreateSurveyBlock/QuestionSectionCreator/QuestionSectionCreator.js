import React from 'react';
import PropTypes from 'prop-types';

import AnswerTypes from '../AnswerTypes';
import Question from '../Question';
import QuestionCreator from '../QuestionCreator';
import { useStyles } from './QuestionSectionCreator.style';

function QuestionSectionCreator({
  isQuestion,
  question,
  setIsQuestion,
  addQuestion,
  activeId,
  onEdit
}) {
  const classes = useStyles();

  return (
    <div className={classes.questionSectionCreatorContainer}>
      <div className={classes.questionSection}>
        {isQuestion ? (
          <Question
            question={question}
            setIsQuestion={setIsQuestion}
            activeId={activeId}
            onEdit={onEdit}
          />
        ) : (
          <QuestionCreator question={question} addQuestion={addQuestion} />
        )}
      </div>
      <div className={classes.answerTypesWrapper}>
        {question ? <AnswerTypes /> : null}
      </div>
    </div>
  );
}

QuestionSectionCreator.propTypes = {
  isQuestion: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
  setIsQuestion: PropTypes.func.isRequired,
  addQuestion: PropTypes.func.isRequired,
  activeId: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default QuestionSectionCreator;
