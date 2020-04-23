import React, { useState } from 'react';
import PropTypes from 'prop-types';
// material ui
import { FormControlLabel, Checkbox } from '@material-ui/core';

import { useStyles } from './CheckboxAnswers.style';

function CheckboxAnswers({ answers, questionId }) {
  const classes = useStyles();

  let filteredAnswers = answers;

  const handleChange = id => {
    filteredAnswers = answers.map(item => {
      if (item.id === id) {
        item.complited = true;
      }
      return item;
    });
    return filteredAnswers;
  };

  return (
    <div className={classes.container}>
      {filteredAnswers.map(({ id, title, complited }) => {
        return (
          <div key={id}>
            <FormControlLabel
              className={classes.colorGreen}
              control={
                <Checkbox
                  checked={complited}
                  onChange={() => handleChange(id)}
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
  questionId: PropTypes.string.isRequired
};

export default CheckboxAnswers;
