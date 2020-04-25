import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FormControl, Select, MenuItem } from '@material-ui/core';

import { useStyles } from './DropdownAnswers.style';

function DropdownAnswers({ answers }) {
  const classes = useStyles();

  const [answer, setAnswer] = useState('');

  const handleChange = event => {
    setAnswer(event.target.value);
  };

  return (
    <div className={classes.container}>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={answer}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {answers.map(({ id, title }) => {
            return (
              <MenuItem key={id} value={id}>
                {title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

DropdownAnswers.propTypes = {
  answers: PropTypes.array.isRequired
};

export default DropdownAnswers;
