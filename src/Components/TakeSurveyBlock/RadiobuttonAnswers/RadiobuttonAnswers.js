import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
  const [isInputVisible, setIsInputVisible] = useState(false);
  const classes = useStyles();

  const handleChange = event => {
    if (hasLastInput) {
      const lastAnswer = answers[answers.length - 1];
      const isLastInputChosen = lastAnswer.id === event.target.value;
      setIsInputVisible(isLastInputChosen);
    }

    setValue(event.target.value);
  };
  const handleTextChange = e => {
    setTextValue(e.target.value);
  };

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
        {isInputVisible ? (
          <TextField
            id="outlined-required"
            variant="outlined"
            value={textValue}
            onChange={handleTextChange}
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
