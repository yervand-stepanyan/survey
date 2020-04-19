import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../helpers/removeSpaces';
import { useStyles } from './RangeSection.style';
import SurveyContext from '../../../State/context';

const BUTTON_LABEL = 'Submit & continue';
const BUTTON_ACCEPT_CHANGES_LABEL = 'Accept changes';
const END_VALUE_LABEL = 'End value';
const START_VALUE_LABEL = 'Start value';
const STEP_VALUE_LABEL = 'Step';
const TITLE = 'Range values';

function RangeSection({
  startValue: startValueProps,
  endValue: endValueProps,
  stepValue: stepValueProps
}) {
  const classes = useStyles();
  const [startValue, setStartValue] = useState(startValueProps || '');
  const [endValue, setEndValue] = useState(endValueProps || '');
  const [stepValue, setStepValue] = useState(stepValueProps || '');
  const [isChanged, setIsChanged] = useState(false);
  const [isStartEmpty, setIsStartEmpty] = useState(false);
  const [isEndEmpty, setIsEndEmpty] = useState(false);
  const [isEqual, setIsEqual] = useState(false);
  const [isStepEmpty, setIsStepEmpty] = useState(false);
  const [isStep, setIsStep] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(
    (!!startValueProps && !!endValueProps && !!stepValueProps) || false
  );
  const { handleAddRangeValues, handleSubmitQuestion } = useContext(
    SurveyContext
  );

  const checkStepCorrect = (start, end, step) => {
    const isStepInvalid =
      step < 0 ||
      !(step <= Math.abs(start - end) / 2) ||
      !Number.isInteger(Math.abs(start - end) / step);

    setIsStep(isStepInvalid);

    if (isSubmitted) {
      setIsChanged(true);
    }

    setIsSubmitted(false);
  };

  const handleStartChange = event => {
    setStartValue(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsStartEmpty(true);
    } else {
      setIsStartEmpty(false);

      setIsEqual(event.target.value === endValue);

      if (endValue && stepValue) {
        checkStepCorrect(event.target.value, endValue, stepValue);
      }
    }
  };

  const handleEndChange = event => {
    setEndValue(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsEndEmpty(true);
    } else {
      setIsEndEmpty(false);

      setIsEqual(startValue === event.target.value);

      if (startValue && stepValue) {
        checkStepCorrect(startValue, event.target.value, stepValue);
      }
    }
  };

  const handleStepChange = event => {
    setStepValue(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsStepEmpty(true);
    } else {
      setIsStepEmpty(false);

      if (startValue && endValue) {
        checkStepCorrect(startValue, endValue, event.target.value);
      }
    }
  };

  const handleSubmit = () => {
    const range = { startValue, endValue, stepValue };
    handleAddRangeValues(range);

    handleSubmitQuestion({ type: 'range', range });

    setIsSubmitted(true);
  };

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
              !startValue ||
              !endValue ||
              !stepValue ||
              isEqual ||
              isStep ||
              isSubmitted
            }
            onClick={handleSubmit}
            size="large"
            variant="contained"
          >
            {isChanged ? BUTTON_ACCEPT_CHANGES_LABEL : BUTTON_LABEL}
          </Button>
        </div>
      </div>
    </div>
  );
}

RangeSection.propTypes = {
  endValue: PropTypes.string,
  startValue: PropTypes.string,
  stepValue: PropTypes.string
};

RangeSection.defaultProps = {
  endValue: '',
  startValue: '',
  stepValue: ''
};

export default RangeSection;
