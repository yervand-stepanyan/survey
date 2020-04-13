import React, { useState } from 'react';
import PropTypes from 'prop-types';
// material ui
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

import { useStyles } from './RadiobuttonAnswers.style';

function RadiobuttonAnswers({ answers, questionId }) {
  const [value, setValue] = useState('');
  const classes = useStyles();

  const handleChange = event => {
    setValue(event.target.value);
  };

  console.log(value, questionId);

  return (
    <div className={classes.container}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {answers.map(({ id, option }) => {
          return (
            <FormControlLabel
              className={classes.formControlLabel}
              value={id}
              control={<Radio />}
              label={option}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
}

RadiobuttonAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  questionId: PropTypes.string.isRequired
};

export default RadiobuttonAnswers;
