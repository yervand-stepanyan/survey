import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { useStyles } from './CheckboxAnswers.style';

function CheckboxAnswers({ answers, questionId, receiveAnswers }) {
  const classes = useStyles();
  const [checkedAnswers, setCheckedAnswers] = useState([]);

  const handleChange = (event, id) => {
    if (checkedAnswers.some(answer => answer === id)) {
      const newAllAnswers = checkedAnswers.filter(answer => answer !== id);
      receiveAnswers(newAllAnswers, '', questionId);
      setCheckedAnswers(newAllAnswers);
    } else {
      const newAllAnswers = [...checkedAnswers, id];
      setCheckedAnswers(newAllAnswers);
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
