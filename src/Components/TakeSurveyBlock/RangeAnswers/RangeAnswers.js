import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Slider } from '@material-ui/core';

import { useStyles } from './RangeAnswers.style';

function RangeAnswers({ questionId, startValue, endValue, stepValue }) {
  const classes = useStyles();

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <div className={classes.container}>
      <Typography id="discrete-slider" gutterBottom>
        On a scale from
        {startValue} - {endValue}
      </Typography>
      <Slider
        defaultValue={startValue}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={stepValue}
        marks
        min={startValue}
        max={endValue}
      />
    </div>
  );
}

RangeAnswers.propTypes = {
  questionId: PropTypes.string.isRequired,
  startValue: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired,
  stepValue: PropTypes.number.isRequired
};

export default RangeAnswers;
