import React from 'react';
import PropTypes from 'prop-types';

import AnswerTypes from '../AnswerTypes';
import Question from '../Question';
import QuestionCreator from '../QuestionCreator';
import { useStyles } from './QuestionSectionCreator.style';

function QuestionSectionCreator({
  activeId,
  addQuestion,
  isQuestion,
  onEdit,
  onRemove,
  question
}) {
  const classes = useStyles();

  return (
    <div className={classes.questionSectionCreatorContainer}>
      <div className={classes.questionSection}>
        {isQuestion ? (
          <Question
            activeId={activeId}
            onEdit={onEdit}
            onRemove={onRemove}
            question={question}
          />
        ) : (
          <QuestionCreator addQuestion={addQuestion} question={question} />
        )}
      </div>
      <div className={classes.answerTypesWrapper}>
        {question ? <AnswerTypes /> : null}
      </div>
    </div>
  );
}

QuestionSectionCreator.propTypes = {
  activeId: PropTypes.string.isRequired,
  addQuestion: PropTypes.func.isRequired,
  isQuestion: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired
};

export default QuestionSectionCreator;
