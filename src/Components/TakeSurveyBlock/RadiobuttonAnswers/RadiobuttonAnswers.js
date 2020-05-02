import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';

import removeSpaces from '../../../helpers/removeSpaces';
import { TEXT_LABELS } from '../../../Globals/variables';
import { useStyles } from './RadiobuttonAnswers.style';

function RadiobuttonAnswers({
  answers,
  hasLastInput,
  questionId,
  receiveAnswers
}) {
  const classes = useStyles();
  const [error, setError] = useState(false);
  const [isInputDisable, setIsInputDisable] = useState(true);
  const lastAnswersId = answers[answers.length - 1].id;
  const [textValue, setTextValue] = useState('');
  const [value, setValue] = useState('');
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

  return (
    <div className={classes.container}>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        onChange={handleChange}
        value={value}
      >
        <div>
          {answers.map(({ id, title }) => {
            return (
              <div
                className={
                  hasLastInput && lastAnswersId === id
                    ? classes.radiobuttonInputAnswerContainer
                    : null
                }
                key={id}
              >
                <FormControlLabel
                  className={classes.formControlLabel}
                  control={<Radio />}
                  label={title}
                  value={id}
                />
                {hasLastInput && lastAnswersId === id ? (
                  <div className={classes.customText}>
                    <TextField
                      className={classes.radiobuttonInputAnswer}
                      disabled={isInputDisable}
                      error={error}
                      id="standard-basic"
                      inputRef={inputEl}
                      label={
                        error
                          ? TEXT_LABELS.radiobuttonAnswersInputErrorLabel
                          : TEXT_LABELS.radiobuttonAnswersInputLabel
                      }
                      onChange={handleTextChange}
                      onBlur={handleOnBlur}
                      value={textValue}
                    />
                  </div>
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
