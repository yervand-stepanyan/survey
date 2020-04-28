import React, { useState, useRef } from 'react';
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
  const [textValue, setTextValue] = useState('');
  const [value, setValue] = useState('');
  const inputEl = useRef(null);

  const handleChange = event => {
    let isLastInputChosen = false;
    if (hasLastInput) {
      const lastAnswer = answers[answers.length - 1];
      isLastInputChosen = lastAnswer.id === event.target.value;
    }

    setValue(event.target.value);

    if (isLastInputChosen) {
      receiveAnswers([], textValue, questionId);
      inputEl.current.focus();
    } else {
      receiveAnswers([event.target.value], '', questionId);
    }
  };
  const handleTextChange = e => {
    setTextValue(e.target.value);
    receiveAnswers([], e.target.value, questionId);
  };

  const lastAnswersId = answers[answers.length - 1].id;

  return (
    <div className={classes.container}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <div>
          {answers.map(({ id, title }) => {
            return (
              <div
                key={id}
                className={
                  hasLastInput && lastAnswersId === id
                    ? classes.radiobuttonInputAnswerContainer
                    : null
                }
              >
                <FormControlLabel
                  className={classes.formControlLabel}
                  value={id}
                  control={<Radio />}
                  label={title}
                />
                {hasLastInput && lastAnswersId === id ? (
                  <TextField
                    className={classes.radiobuttonInputAnswer}
                    id="standard-basic"
                    inputRef={inputEl}
                    error={!textValue}
                    label={textValue ? 'Write here' : 'Invalid input'}
                    value={textValue}
                    onChange={handleTextChange}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
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
