import React from 'react';
import PropTypes from 'prop-types';

import SurveyAnswer from '../SurveyAnswer';

import { useStyles } from './RadiobuttonAnswers.style';

function RadiobuttonAnswers({ answers, answerType }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {answers.map(({ id, option }) => {
        return <SurveyAnswer key={id} id={id} option={option} />;
      })}
    </div>
  );
}

RadiobuttonAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  answerType: PropTypes.string.isRequired
};

export default RadiobuttonAnswers;
