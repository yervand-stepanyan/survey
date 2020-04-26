import React from 'react';
import PropTypes from 'prop-types';

import { Slider } from '@material-ui/core';

import { useStyles } from './RangeAnswers.style';

function RangeAnswers({ endValue, startValue, stepValue }) {
  const classes = useStyles();
  const defaultValue = Math.abs(startValue - endValue) / 2;
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

  return (
    <div className={classes.container}>
      <Slider
        aria-labelledby="discrete-slider"
        defaultValue={defaultValue}
        getAriaValueText={valuetext}
        marks={marks}
        max={endValue}
        min={startValue}
        step={stepValue}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

RangeAnswers.propTypes = {
  startValue: PropTypes.number.isRequired,
  endValue: PropTypes.number.isRequired,
  stepValue: PropTypes.number.isRequired
};

export default RangeAnswers;
