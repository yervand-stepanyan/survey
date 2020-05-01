import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import {
  ANSWER_SECTION_BUTTON_ACCEPT_CHANGES_LABEL,
  ANSWER_SECTION_BUTTON_LABEL,
  TEXT_LABELS
} from '../../../Globals/variables';
import removeSpaces from '../../../helpers/removeSpaces';
import { useStore } from '../../../State/use-store';
import { useStyles } from './RangeSection.style';

function RangeSection({
  activeId,
  endValue: endValueProps,
  startValue: startValueProps,
  stepValue: stepValueProps
}) {
  const classes = useStyles();
  const [endValue, setEndValue] = useState(endValueProps || '');
  const [isChanged, setIsChanged] = useState(false);
  const [isEndEmpty, setIsEndEmpty] = useState(false);
  const [isEqual, setIsEqual] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isStartEmpty, setIsStartEmpty] = useState(false);
  const [isStepEmpty, setIsStepEmpty] = useState(false);
  const [isStepValid, setIsStepValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(
    (!!startValueProps && !!endValueProps && !!stepValueProps) || false
  );
  const [startValue, setStartValue] = useState(startValueProps || '');
  const [stepValue, setStepValue] = useState(stepValueProps || '');
  const inputEl = useRef(null);
  const {
    disableSave,
    handleAddRangeValues,
    handleSubmitQuestion
  } = useStore();

  useEffect(() => {
    if (!activeId) {
      inputEl.current.focus();
    }
  }, [activeId]);

  const checkStepIsValid = ({
    endValue: end,
    startValue: start,
    stepValue: step
  }) => {
    const isStepInvalid =
      step < 0 ||
      !(step <= Math.abs(start - end) / 2) ||
      !Number.isInteger(Math.abs(start - end) / step);

    setIsStepValid(!isStepInvalid);

    if (isSubmitted) {
      setIsChanged(true);
    }

    disableSave(true);

    setIsSubmitted(false);
  };

  const handleChange = (
    event,
    setValue,
    setIsEmpty,
    firstValue,
    secondValue,
    targetKey,
    firstKey,
    secondKey
  ) => {
    setValue(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsEmpty(true);

      disableSave(true);
    } else {
      setIsEmpty(false);

      if (
        (targetKey === 'startValue' && firstKey === 'endValue') ||
        (targetKey === 'endValue' && firstKey === 'startValue')
      ) {
        setIsEqual(firstValue === event.target.value);
      }

      if (
        targetKey === 'startValue' &&
        firstKey === 'endValue' &&
        Number(firstValue)
      ) {
        if (Number(firstValue) < Number(event.target.value)) {
          setIsInvalid(true);
        } else {
          setIsInvalid(false);
        }
      }

      if (
        targetKey === 'endValue' &&
        firstKey === 'startValue' &&
        Number(firstValue)
      ) {
        if (Number(firstValue) > Number(event.target.value)) {
          setIsInvalid(true);
        } else {
          setIsInvalid(false);
        }
      }

      if (firstValue && secondValue) {
        checkStepIsValid({
          [targetKey]: event.target.value,
          [firstKey]: firstValue,
          [secondKey]: secondValue
        });
      }

      handleAddRangeValues(activeId, {
        [targetKey]: event.target.value,
        [firstKey]: firstValue,
        [secondKey]: secondValue
      });
    }
  };

  const handleStartChange = event => {
    handleChange(
      event,
      setStartValue,
      setIsStartEmpty,
      endValue,
      stepValue,
      'startValue',
      'endValue',
      'stepValue'
    );
  };

  const handleEndChange = event => {
    handleChange(
      event,
      setEndValue,
      setIsEndEmpty,
      startValue,
      stepValue,
      'endValue',
      'startValue',
      'stepValue'
    );
  };

  const handleStepChange = event => {
    handleChange(
      event,
      setStepValue,
      setIsStepEmpty,
      startValue,
      endValue,
      'stepValue',
      'startValue',
      'endValue'
    );
  };

  const handleSubmit = () => {
    handleSubmitQuestion(activeId);

    setIsSubmitted(true);
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      if (startValue && endValue && stepValue && !isEqual && isStepValid) {
        handleSubmit();
      }
    }
  };

  return (
    <div className={classes.rangeSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TEXT_LABELS.rangeSectionTitle}</Typography>
      </div>
      <div className={classes.inputWrapper}>
        <div className={classes.textFieldsSection}>
          <div className={classes.textFieldWrapper}>
            <TextField
              error={isStartEmpty || isEqual || isInvalid}
              fullWidth
              id="outlined-basic"
              inputRef={inputEl}
              label={TEXT_LABELS.rangeSectionStartValueLabel}
              onChange={e => handleStartChange(e)}
              onKeyDown={handleSubmitOnEnter}
              type="number"
              value={startValue}
              variant="outlined"
            />
          </div>
          <div className={classes.textFieldWrapper}>
            <TextField
              error={isEndEmpty || isEqual || isInvalid}
              fullWidth
              id="outlined-basic"
              label={TEXT_LABELS.rangeSectionEndValueLabel}
              onChange={e => handleEndChange(e)}
              onKeyDown={handleSubmitOnEnter}
              type="number"
              value={endValue}
              variant="outlined"
            />
          </div>
          <div className={classes.textFieldWrapper}>
            <TextField
              error={isStepEmpty || !isStepValid}
              fullWidth
              id="outlined-basic"
              label={TEXT_LABELS.rangeSectionStepValueLabel}
              onChange={e => handleStepChange(e)}
              onKeyDown={handleSubmitOnEnter}
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
              !isStepValid ||
              isSubmitted
            }
            onClick={handleSubmit}
            size="large"
            variant="contained"
          >
            {isChanged
              ? ANSWER_SECTION_BUTTON_ACCEPT_CHANGES_LABEL
              : ANSWER_SECTION_BUTTON_LABEL}
          </Button>
        </div>
      </div>
    </div>
  );
}

RangeSection.propTypes = {
  activeId: PropTypes.string.isRequired,
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
