import React from 'react';
import PropTypes from 'prop-types';
// material ui
import 'date-fns';
import { TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import { useStyles } from './InputAnswers.style';

function InputAnswers({ questionId, inputType }) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-04-13T21:11:54')
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  if (inputType === 'date') {
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
  if (inputType === 'number') {
    return (
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
      />
    );
  }
  if (inputType === 'text') {
    return <div>text</div>;
  }
  return (
    <div className={classes.container}>
      <label htmlFor={questionId}>
        Start date:
        <input type="text" id={questionId} name={questionId} />
      </label>
    </div>
  );
}

InputAnswers.propTypes = {
  questionId: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired
};

export default InputAnswers;
