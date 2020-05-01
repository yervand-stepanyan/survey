import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Slider from '@material-ui/core/Slider';

import { useStyles } from './RangeAnswers.style';

function RangeAnswers({
  endValue,
  questionId,
  receiveAnswers,
  startValue,
  stepValue
}) {
  const classes = useStyles();
  const defaultValue = startValue + stepValue;
  const [rangeValue, setRangeValue] = useState('');
  const [showValueLabel, setShowValueLabel] = useState(true);
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

  useEffect(() => {
    receiveAnswers([], rangeValue || defaultValue.toString(), questionId);
  }, [rangeValue]);

  const valuetext = value => {
    return `${value}`;
  };

  const commitHandler = (event, value) => {
    setRangeValue(value.toString());
    setShowValueLabel(false);
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
        onChangeCommitted={commitHandler}
        step={stepValue}
        valueLabelDisplay={showValueLabel ? 'on' : 'auto'}
      />
    </div>
  );
}

RangeAnswers.propTypes = {
  endValue: PropTypes.number.isRequired,
  questionId: PropTypes.string.isRequired,
  receiveAnswers: PropTypes.func.isRequired,
  startValue: PropTypes.number.isRequired,
  stepValue: PropTypes.number.isRequired
};

export default RangeAnswers;
