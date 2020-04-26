import React from 'react';
import PropTypes from 'prop-types';

import { Slider } from '@material-ui/core';

import { useStyles } from './RangeAnswers.style';

function RangeAnswers({
  startValue,
  endValue,
  stepValue,
  receiveAnswers,
  questionId
}) {
  const classes = useStyles();

  const marks = [
    {
      value: startValue,
      label: startValue
    },
    {
      value: endValue,
      label: endValue
    }
  ];

  const valuetext = value => {
    return `${value}`;
  };

  const commitHandler = (event, value) => {
    receiveAnswers([], value, questionId);
  };

  return (
    <div className={classes.container}>
      <Slider
        defaultValue={startValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={stepValue}
        marks={marks}
        min={startValue}
        max={endValue}
        onChangeCommitted={commitHandler}
      />
    </div>
  );
}

RangeAnswers.propTypes = {
  startValue: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired,
  stepValue: PropTypes.number.isRequired,
  questionId: PropTypes.string.isRequired,
  receiveAnswers: PropTypes.func.isRequired
};

export default RangeAnswers;
