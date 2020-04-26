import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel, Checkbox } from '@material-ui/core';

import { useStyles } from './CheckboxAnswers.style';

function CheckboxAnswers({ answers, questionId, receiveAnswers }) {
  const [checkedAnswers, setChekedAnswers] = useState([]);
  const classes = useStyles();

  const handleChange = (event, id) => {
    if (checkedAnswers.some(answer => answer === id)) {
      const newAllAnswers = checkedAnswers.filter(answer => answer !== id);
      receiveAnswers(newAllAnswers, '', questionId);
      setChekedAnswers(newAllAnswers);
    } else {
      const newAllAnswers = [...checkedAnswers, id];
      setChekedAnswers(newAllAnswers);
      receiveAnswers(newAllAnswers, '', questionId);
    }
  };

  return (
    <div className={classes.container}>
      {answers.map(({ id, title }) => {
        return (
          <div key={id}>
            <FormControlLabel
              className={classes.colorGreen}
              control={
                <Checkbox
                  onChange={event => handleChange(event, id)}
                  name={questionId}
                />
              }
              label={title}
            />
          </div>
        );
      })}
    </div>
  );
}

CheckboxAnswers.propTypes = {
  answers: PropTypes.array.isRequired,
  questionId: PropTypes.string.isRequired,
  receiveAnswers: PropTypes.func.isRequired
};

export default CheckboxAnswers;
