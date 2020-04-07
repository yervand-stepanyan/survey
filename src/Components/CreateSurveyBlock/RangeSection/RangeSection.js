import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../Helpers/removeSpaces';
import { useStyles } from './RangeSection.style';

const BUTTON_LABEL = 'Submit';
const END_VALUE_LABEL = 'End value';
const START_VALUE_LABEL = 'Start value';
const STEP_VALUE_LABEL = 'Step';
const TITLE = 'Range values';

function RangeSection() {
  const classes = useStyles();
  const [startValue, setStartValue] = useState('');
  const [endValue, setEndValue] = useState('');
  const [stepValue, setStepValue] = useState('');
  const [isStartEmpty, setIsStartEmpty] = useState(false);
  const [isEndEmpty, setIsEndEmpty] = useState(false);
  const [isStepEmpty, setIsStepEmpty] = useState(false);
  const [isEqual, setIsEqual] = useState(false);
  const [isStep, setIsStep] = useState(false);

  const checkStepCorrect = (start, end, step) => {
    const isCorrectStep = step < 1 || !(step <= Math.abs(start - end) / 2);

    setIsStep(isCorrectStep);
  };

  const handleStartChange = event => {
    setStartValue(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsStartEmpty(true);
    } else {
      setIsStartEmpty(false);

      setIsEqual(event.target.value === endValue);

      checkStepCorrect(event.target.value, endValue, stepValue);
    }
  };

  const handleEndChange = event => {
    setEndValue(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsEndEmpty(true);
    } else {
      setIsEndEmpty(false);

      setIsEqual(startValue === event.target.value);

      checkStepCorrect(startValue, event.target.value, stepValue);
    }
  };

  const handleStepChange = event => {
    setStepValue(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsStepEmpty(true);
    } else {
      setIsStepEmpty(false);

      checkStepCorrect(startValue, endValue, event.target.value);
    }
  };

  const handleSubmit = () => {};

  return (
    <div className={classes.rangeSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <div className={classes.inputWrapper}>
        <div className={classes.textFieldsSection}>
          <div className={classes.textFieldWrapper}>
            <TextField
              autoFocus
              error={isStartEmpty || isEqual}
              id="outlined-basic"
              fullWidth
              label={START_VALUE_LABEL}
              onChange={e => handleStartChange(e)}
              // onKeyDown={handleSubmitOnEnter}
              type="number"
              value={startValue}
              variant="outlined"
            />
          </div>
          <div className={classes.textFieldWrapper}>
            <TextField
              error={isEndEmpty || isEqual}
              id="outlined-basic"
              fullWidth
              label={END_VALUE_LABEL}
              onChange={e => handleEndChange(e)}
              // onKeyDown={handleSubmitOnEnter}
              type="number"
              value={endValue}
              variant="outlined"
            />
          </div>
          <div className={classes.textFieldWrapper}>
            <TextField
              error={isStepEmpty || isStep}
              id="outlined-basic"
              fullWidth
              label={STEP_VALUE_LABEL}
              onChange={e => handleStepChange(e)}
              // onKeyDown={handleSubmitOnEnter}
              type="number"
              value={stepValue}
              variant="outlined"
            />
          </div>
        </div>
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            disabled={
              !startValue || !endValue || !stepValue || isEqual || isStep
            }
            onClick={handleSubmit}
            size="large"
            variant="contained"
          >
            {BUTTON_LABEL}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RangeSection;
