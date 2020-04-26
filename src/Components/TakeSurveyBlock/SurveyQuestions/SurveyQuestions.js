import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';

import SurveyQuestion from '../SurveyQuestion';
import { useStyles } from './SurveyQuestions.style';

function SurveyQuestions({ questions, survey }) {
  const [surveyAnswers, setSurveyAnswers] = useState([]);
  const [results, setResults] = useState({});
  const classes = useStyles();

  const SUBMIT_TEXT = 'submit';

  const receiveAnswers = (markedAnswers, customAnswer, questionId) => {
    if (surveyAnswers.some(answer => answer.questionId === questionId)) {
      const newSurveyAnswers = surveyAnswers.map(item => {
        if (item.questionId === questionId) {
          item.markedAnswers = markedAnswers;
          item.customAnswer = customAnswer;
        }
        return item;
      });
      setSurveyAnswers(newSurveyAnswers);
    } else {
      setSurveyAnswers([
        ...surveyAnswers,
        {
          markedAnswers,
          customAnswer,
          questionId
        }
      ]);
    }
  };

  useEffect(() => {
    setResults({ survey, answers: surveyAnswers });
  }, [surveyAnswers]);

  const consoleAnswers = () => {};

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
              receiveAnswers={receiveAnswers}
            />
          );
        }
      )}
      <Button variant="contained" color="primary" onClick={consoleAnswers}>
        {SUBMIT_TEXT}
      </Button>
    </div>
  );
}

SurveyQuestions.propTypes = {
  questions: PropTypes.array.isRequired,
  survey: PropTypes.string.isRequired
};

export default SurveyQuestions;
