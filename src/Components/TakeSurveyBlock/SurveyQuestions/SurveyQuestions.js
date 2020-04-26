import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SurveyQuestion from '../SurveyQuestion';
import { useStyles } from './SurveyQuestions.style';

const SUBMIT_TEXT = 'Submit';

function SurveyQuestions({ questions, title: surveyTitle }) {
  const classes = useStyles();

  return (
    <div className={classes.surveyQuestionsContainer}>
      <div className={classes.titleContainer}>
        <Typography variant="h3">{surveyTitle}</Typography>
      </div>
      {questions.map(
        ({
          answers,
          answerType,
          endValue,
          hasLastInput,
          id,
          inputType,
          startValue,
          stepValue,
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
  questions: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default SurveyQuestions;
