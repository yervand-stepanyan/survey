import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';

import { INPUT_TYPE, TEXT_LABEL } from '../../../globals/constants';
import removeSpaces from '../../../helpers/removeSpaces';
import { useStyles } from './InputAnswers.style';

function InputAnswers({ inputType, receiveAnswers, questionId }) {
  const classes = useStyles();
  const [numberValue, setNumberValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    receiveAnswers([], date, questionId);
  };

  const handleTextChange = e => {
    const filteredValue = removeSpaces(e.target.value);

    setTextValue(e.target.value);

    if (filteredValue) {
      receiveAnswers([], filteredValue, questionId);
    }
  };

  const handleNumberChange = e => {
    setNumberValue(e.target.value);

    receiveAnswers([], e.target.value, questionId);
  };

  if (inputType === INPUT_TYPE.date) {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          format="MM/dd/yyyy"
          keyboardbuttonprops={{
            'aria-label': 'change date'
          }}
          label={TEXT_LABEL.inputAnswersInputDateLabel}
          margin="normal"
          onChange={handleDateChange}
          value={selectedDate}
        />
      </MuiPickersUtilsProvider>
    );
  }
  if (inputType === INPUT_TYPE.number) {
    return (
      <TextField
        id="outlined-number"
        InputLabelProps={{
          shrink: true
        }}
        label={TEXT_LABEL.inputAnswersInputNumberLabel}
        onChange={handleNumberChange}
        type="number"
        value={numberValue}
        variant="outlined"
      />
    );
  }
  if (inputType === INPUT_TYPE.text) {
    return (
      <TextField
        className={classes.inputFieldForText}
        id="outlined"
        label={TEXT_LABEL.inputAnswersInputTextLabel}
        onChange={handleTextChange}
        value={textValue}
        variant="outlined"
      />
    );
  }
  return (
    <div className={classes.container}>{TEXT_LABEL.inputAnswersErrorLabel}</div>
  );
}

InputAnswers.propTypes = {
  inputType: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  receiveAnswers: PropTypes.func.isRequired
};

export default InputAnswers;
