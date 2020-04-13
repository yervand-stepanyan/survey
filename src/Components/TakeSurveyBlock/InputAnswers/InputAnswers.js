import React from 'react';
import PropTypes from 'prop-types';
// material ui
import { TextField } from '@material-ui/core';

import { useStyles } from './InputAnswers.style';

function InputAnswers({ questionId, inputType }) {
  const classes = useStyles();
  if (inputType === 'date') {
    return (
      <div className={classes.container}>
        <label htmlFor={questionId}>
          Start date:
          <input type="date" id={questionId} name={questionId} />
        </label>
      </div>
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
  questionId: PropTypes.string.isRequired
};

export default InputAnswers;
