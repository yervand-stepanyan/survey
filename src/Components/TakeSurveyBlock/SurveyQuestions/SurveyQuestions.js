import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import SurveyQuestion from '../SurveyQuestion';
import { useStyles } from './SurveyQuestions.style';

const SUBMIT_TEXT = 'submit';

function SurveyQuestions({ questions }) {
  const classes = useStyles();

  return (
    <div className={classes.surveyQuestionsContainer}>
      {questions.map(
        ({
          answers,
          answerType,
          endValue = '100',
          hasLastInput,
          id,
          inputType,
          startValue = '0',
          stepValue = '10',
          title
        }) => {
          return (
            <SurveyQuestion
              answers={answers}
              answerType={answerType}
              endValue={endValue}
              hasLastInput={hasLastInput}
              id={id}
              inputType={inputType}
              key={id}
              startValue={startValue}
              stepValue={stepValue}
              title={title}
            />
          );
        }
      )}
      <Button color="primary" variant="contained">
        {SUBMIT_TEXT}
      </Button>
    </div>
  );
}

SurveyQuestions.propTypes = {
  questions: PropTypes.array.isRequired
};

export default SurveyQuestions;
