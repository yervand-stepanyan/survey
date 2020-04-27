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
  const [selectedDate, setSelectedDate] = useState(new Date());
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
        label="Type here..."
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
        id="outlined"
        label="Type here..."
        variant="outlined"
        value={textValue}
        onChange={handleTextChange}
        className={classes.inputFieldForText}
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
