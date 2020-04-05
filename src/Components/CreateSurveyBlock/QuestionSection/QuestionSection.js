import React, { useState } from 'react';

import AnswerTypes from '../AnswerTypes';
import Question from '../Question';
import QuestionCreator from '../QuestionCreator';
import { useStyles } from './QuestionSection.style';

function QuestionSection() {
  const classes = useStyles();
  const [question, setQuestion] = useState('');
  const [isQuestion, setIsQuestion] = useState(false);

  return (
    <div className={classes.questionSectionContainer}>
      <div>
        <div className={classes.questionSection}>
          {isQuestion ? (
            <Question question={question} setIsQuestion={setIsQuestion} />
          ) : (
            <QuestionCreator
              question={question}
              setQuestion={setQuestion}
              setIsQuestion={setIsQuestion}
            />
          )}
        </div>
        <div className={classes.answerTypesWrapper}>
          {question ? <AnswerTypes /> : null}
        </div>
      </div>
    </div>
  );
}

export default QuestionSection;
