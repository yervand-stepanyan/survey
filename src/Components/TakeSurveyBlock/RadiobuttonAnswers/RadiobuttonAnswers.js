import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './RadiobuttonAnswers.style';

function RadiobuttonAnswers({
  questionId,
  answers,
  hasLastInput,
  receiveAnswers
}) {
  const classes = useStyles();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [value, setValue] = useState('');

  const handleChange = event => {
    let isLastInputChosen = false;
    if (hasLastInput) {
      const lastAnswer = answers[answers.length - 1];
      isLastInputChosen = lastAnswer.id === event.target.value;
      setIsInputVisible(isLastInputChosen);
    }

    setValue(event.target.value);
    receiveAnswers(
      [event.target.value],
      isLastInputChosen ? textValue : '',
      questionId
    );
  };
  const handleTextChange = e => {
    setTextValue(e.target.value);
    receiveAnswers([value], e.target.value, questionId);
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
  hasLastInput: PropTypes.bool.isRequired,
  questionId: PropTypes.string.isRequired,
  receiveAnswers: PropTypes.func.isRequired
};

export default RadiobuttonAnswers;
