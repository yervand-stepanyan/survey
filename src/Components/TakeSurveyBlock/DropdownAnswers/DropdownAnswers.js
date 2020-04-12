import React from 'react';
import PropTypes from 'prop-types';

import { useStyles } from './DropdownAnswers.style';

function DropdownAnswers({ answers, questionId }) {
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

DropdownAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  questionId: PropTypes.string.isRequired
};

export default DropdownAnswers;
