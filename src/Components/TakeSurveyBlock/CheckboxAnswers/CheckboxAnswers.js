import React, { useState } from 'react';
import PropTypes from 'prop-types';
// material ui
import { FormControlLabel, Checkbox } from '@material-ui/core';

import { useStyles } from './CheckboxAnswers.style';

function CheckboxAnswers({ answers, questionId }) {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.container}>
      {answers.map(({ id, option }) => {
        return (
          <div key={id}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  name={questionId}
                  className={classes.colorGreen}
                />
              }
              label={option}
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
