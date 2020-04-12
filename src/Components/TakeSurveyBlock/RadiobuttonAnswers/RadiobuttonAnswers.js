import React from 'react';
import PropTypes from 'prop-types';

import SurveyAnswer from '../SurveyAnswer';

import { useStyles } from './RadiobuttonAnswers.style';

function RadiobuttonAnswers({ answers, questionId }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {answers.map(({ id, option }) => {
        return (
          <div key={id}>
            <label htmlFor={id}>
              <input type="radio" id={id} name={questionId} />
              <span>{option}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
}

RadiobuttonAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  questionId: PropTypes.string.isRequired
};

export default RadiobuttonAnswers;
