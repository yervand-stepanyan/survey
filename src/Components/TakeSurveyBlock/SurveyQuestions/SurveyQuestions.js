import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

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
          title,
          answerType,
          inputType,
          answers,
          hasLastInput,
          startValue = '0',
          endValue = '100',
          stepValue = '10'
        }) => {
          return (
            <SurveyQuestion
              id={id}
              title={title}
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
