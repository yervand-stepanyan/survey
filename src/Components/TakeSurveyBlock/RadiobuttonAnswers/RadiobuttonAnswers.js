import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';

import { useStyles } from './RadiobuttonAnswers.style';
import removeSpaces from '../../../helpers/removeSpaces';

const INPUT_LABEL_PLACEHOLDER_VALID_TEXT = 'Type here';
const INPUT_LABEL_PLACEHOLDER_ERROR_TEXT = 'Invalid input';

function RadiobuttonAnswers({
  questionId,
  answers,
  hasLastInput,
  receiveAnswers
}) {
  const classes = useStyles();
  const [textValue, setTextValue] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [isInputDisable, setIsInputDisable] = useState(true);
  const inputEl = useRef(null);

  useEffect(() => {
    if (!isInputDisable) {
      inputEl.current.focus();
    }
  });

  const handleChange = event => {
    let isLastInputChosen = false;
    if (hasLastInput) {
      const lastAnswer = answers[answers.length - 1];
      isLastInputChosen = lastAnswer.id === event.target.value;
    }

    setValue(event.target.value);

    if (isLastInputChosen) {
      receiveAnswers([], textValue, questionId);
      setIsInputDisable(false);
    } else {
      receiveAnswers([event.target.value], '', questionId);
      setIsInputDisable(true);
      setError(false);
      setTextValue('');
    }
  };
  const handleTextChange = e => {
    const filteredValue = removeSpaces(e.target.value);
    setTextValue(e.target.value);
    receiveAnswers([], filteredValue, questionId);
    if (filteredValue) {
      setError(false);
    }
  };
  const handleOnBlur = () => {
    if (!removeSpaces(textValue)) {
      setError(true);
    }
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
                    error={error}
                    label={
                      error
                        ? INPUT_LABEL_PLACEHOLDER_ERROR_TEXT
                        : INPUT_LABEL_PLACEHOLDER_VALID_TEXT
                    }
                    value={textValue}
                    onChange={handleTextChange}
                    disabled={isInputDisable}
                    onBlur={handleOnBlur}
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
