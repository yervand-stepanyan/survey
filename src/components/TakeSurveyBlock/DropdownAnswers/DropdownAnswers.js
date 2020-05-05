import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { TEXT_LABELS } from '../../../globals/constants';
import { useStyles } from './DropdownAnswers.style';

function DropdownAnswers({ answers, receiveAnswers, questionId }) {
  const classes = useStyles();
  const [answer, setAnswer] = useState('');

  const handleChange = event => {
    setAnswer(event.target.value);

    receiveAnswers([event.target.value], '', questionId);
  };

  return (
    <div className={classes.container}>
      <FormControl variant="outlined">
        <Select
          id="demo-simple-select-outlined"
          labelId="demo-simple-select-outlined-label"
          onChange={handleChange}
          value={answer}
        >
          <MenuItem value="">
            <em>{TEXT_LABELS.dropdownAnswersSelectMenuItemNone}</em>
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
  answers: PropTypes.array.isRequired,
  questionId: PropTypes.string.isRequired,
  receiveAnswers: PropTypes.func.isRequired
};

export default DropdownAnswers;
