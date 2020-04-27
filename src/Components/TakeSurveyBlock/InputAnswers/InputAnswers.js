import React, { useState } from 'react';
import PropTypes from 'prop-types';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';

import { useStyles } from './InputAnswers.style';

function InputAnswers({ inputType, receiveAnswers, questionId }) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(
    new Date('2020-04-13T21:11:54')
  );
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');

  const handleDateChange = date => {
    setSelectedDate(date);

    receiveAnswers([], date, questionId);
  };
  const handleTextChange = e => {
    setTextValue(e.target.value);

    receiveAnswers([], e.target.value, questionId);
  };

  const handleNumberChange = e => {
    setNumberValue(e.target.value);

    receiveAnswers([], e.target.value, questionId);
  };

  if (inputType === 'DATE') {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date'
          }}
        />
      </MuiPickersUtilsProvider>
    );
  }
  if (inputType === 'NUMBER') {
    return (
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true
        }}
        value={numberValue}
        variant="outlined"
        onChange={handleNumberChange}
      />
    );
  }
  if (inputType === 'TEXT') {
    return (
      <TextField
        required
        id="outlined-required"
        label="Required"
        variant="outlined"
        value={textValue}
        onChange={handleTextChange}
      />
    );
  }
  return <div className={classes.container}>Something went wrong!</div>;
}

InputAnswers.propTypes = {
  inputType: PropTypes.string.isRequired,
  questionId: PropTypes.string.isRequired,
  receiveAnswers: PropTypes.func.isRequired
};

export default InputAnswers;
