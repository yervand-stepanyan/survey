import React from 'react';
import PropTypes from 'prop-types';
import SurveyQuestion from '../SurveyQuestion';

import { useStyles } from './SurveyQuestions.style';

function SurveyQuestions({ questions }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {questions.map(
        ({
          id,
          question,
          answerType,
          inputType,
          answers,
          hasLastInput,
          startValue,
          endValue,
          stepValue
        }) => {
          return (
            <SurveyQuestion
              id={id}
              question={question}
              answerType={answerType}
              inputType={inputType}
              answers={answers}
              hasLastInput={hasLastInput}
              startValue={startValue}
              endValue={endValue}
              stepValue={stepValue}
              key={id}
            />
          );
        }
      )}
    </div>
  );
}

SurveyQuestions.propTypes = {
  questions: PropTypes.array.isRequired
};

export default SurveyQuestions;
