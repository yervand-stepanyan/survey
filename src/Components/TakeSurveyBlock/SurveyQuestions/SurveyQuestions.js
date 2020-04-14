import React from 'react';
import PropTypes from 'prop-types';
// material ui
import { Button } from '@material-ui/core';
// components
import SurveyQuestion from '../SurveyQuestion';
import { useStyles } from './SurveyQuestions.style';

function SurveyQuestions({ questions }) {
  const classes = useStyles();

  const SUBMIT_TEXT = 'submit';

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
      <Button variant="contained" color="primary">
        {SUBMIT_TEXT}
      </Button>
    </div>
  );
}

SurveyQuestions.propTypes = {
  questions: PropTypes.array.isRequired
};

export default SurveyQuestions;
