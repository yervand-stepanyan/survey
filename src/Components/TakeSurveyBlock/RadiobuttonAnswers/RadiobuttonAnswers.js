import React, { useState } from 'react';
import PropTypes from 'prop-types';
// material ui
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField
} from '@material-ui/core';

import { useStyles } from './RadiobuttonAnswers.style';

function RadiobuttonAnswers({ answers, questionId, hasLastInput }) {
  const [value, setValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const classes = useStyles();

  const handleChange = event => {
    setValue(event.target.value);
  };
  const handleTextChange = e => {
    setTextValue(e.target.value);
  };

  console.log('value --', value);

  return (
    <div className={classes.container}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        {answers.map(({ id, title }) => {
          return (
            <FormControlLabel
              key={id}
              className={classes.formControlLabel}
              value={id}
              control={<Radio />}
              label={title}
            />
          );
        })}
        {hasLastInput ? (
          <FormControlLabel
            className={classes.formControlLabel}
            value={textValue}
            control={<Radio />}
            label={
              <TextField
                id="outlined-required"
                variant="outlined"
                value={textValue}
                onChange={handleTextChange}
              />
            }
          />
        ) : null}
      </RadioGroup>
    </div>
  );
}

RadiobuttonAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  questionId: PropTypes.string.isRequired,
  hasLastInput: PropTypes.bool.isRequired
};

export default RadiobuttonAnswers;
