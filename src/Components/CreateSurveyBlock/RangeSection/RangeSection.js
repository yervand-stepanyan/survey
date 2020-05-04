import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

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
  const [openEndErrorTooltip, setOpenEndErrorTooltip] = useState(false);
  const [openEndHelpTooltip, setOpenEndHelpTooltip] = useState(false);
  const [openStartErrorTooltip, setOpenStartErrorTooltip] = useState(false);
  const [openStartHelpTooltip, setOpenStartHelpTooltip] = useState(false);
  const [openStepErrorTooltip, setOpenStepErrorTooltip] = useState(false);
  const [openStepHelpTooltip, setOpenStepHelpTooltip] = useState(false);
  const [startValue, setStartValue] = useState(startValueProps || '');
  const [stepValue, setStepValue] = useState(stepValueProps || '');
  const inputEl = useRef(null);
  const {
    disableSave,
    handleAddRangeValues,
    handleSubmitQuestion
  } = useStore();
  const [endErrorTooltipTitle, setEndErrorTooltipTitle] = useState('');
  const [startErrorTooltipTitle, setStartErrorTooltipTitle] = useState('');

  useEffect(() => {
    if (!activeId) {
      inputEl.current.focus();
    }
  }, [activeId]);

  useEffect(() => {
    if (isEndEmpty) {
      setEndErrorTooltipTitle(
        TEXT_LABELS.rangeSectionEndValueErrorTooltipMessage
      );
    } else if (isEqual) {
      setEndErrorTooltipTitle(
        TEXT_LABELS.rangeSectionEqualValuesErrorTooltipMessage
      );
    } else {
      setEndErrorTooltipTitle(
        TEXT_LABELS.rangeSectionInvalidEndValueErrorTooltipMessage
      );
    }
  }, [isEndEmpty, isEqual]);

  useEffect(() => {
    if (isStartEmpty) {
      setStartErrorTooltipTitle(
        TEXT_LABELS.rangeSectionStartValueErrorTooltipMessage
      );
    } else if (isEqual) {
      setStartErrorTooltipTitle(
        TEXT_LABELS.rangeSectionEqualValuesErrorTooltipMessage
      );
    } else {
      setStartErrorTooltipTitle(
        TEXT_LABELS.rangeSectionInvalidStartValueErrorTooltipMessage
      );
    }
  }, [isStartEmpty, isEqual]);

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

  const handleShowStartErrorTooltip = () => {
    setOpenStartErrorTooltip(!openStartErrorTooltip);
  };

  const handleShowStartHelpTooltip = () => {
    setOpenStartHelpTooltip(!openStartHelpTooltip);
  };

  const handleStartInputFocus = () => {
    setOpenEndErrorTooltip(false);
    setOpenEndHelpTooltip(false);

    setOpenStartErrorTooltip(false);
    setOpenStartHelpTooltip(false);

    setOpenStepErrorTooltip(false);
    setOpenStepHelpTooltip(false);
  };

  const handleShowEndErrorTooltip = () => {
    setOpenEndErrorTooltip(!openEndErrorTooltip);
  };

  const handleShowEndHelpTooltip = () => {
    setOpenEndHelpTooltip(!openEndHelpTooltip);
  };

  const handleEndInputFocus = () => {
    setOpenEndErrorTooltip(false);
    setOpenEndHelpTooltip(false);

    setOpenStartErrorTooltip(false);
    setOpenStartHelpTooltip(false);

    setOpenStepErrorTooltip(false);
    setOpenStepHelpTooltip(false);
  };

  const handleShowStepErrorTooltip = () => {
    setOpenStepErrorTooltip(!openStepErrorTooltip);
  };

  const handleShowStepHelpTooltip = () => {
    setOpenStepHelpTooltip(!openStepHelpTooltip);
  };

  const handleStepInputFocus = () => {
    setOpenEndErrorTooltip(false);
    setOpenEndHelpTooltip(false);

    setOpenStartErrorTooltip(false);
    setOpenStartHelpTooltip(false);

    setOpenStepErrorTooltip(false);
    setOpenStepHelpTooltip(false);
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
              onFocus={handleStartInputFocus}
              onKeyDown={handleSubmitOnEnter}
              type="number"
              value={startValue}
              variant="outlined"
            />
            <div className={classes.iconWrapper}>
              {isStartEmpty || isEqual || isInvalid ? (
                <Tooltip
                  arrow
                  classes={{
                    arrow: classes.errorIconArrow,
                    tooltip: classes.errorIconTooltip
                  }}
                  open={openStartErrorTooltip}
                  title={startErrorTooltipTitle}
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    className={classes.errorIcon}
                    onClick={handleShowStartErrorTooltip}
                  >
                    <ErrorIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <div
                  className={
                    startValue ? classes.checkIconWrapper : classes.iconWrapper
                  }
                >
                  {startValue ? (
                    <div className={classes.checkIconContainer}>
                      <CheckCircleIcon className={classes.checkIcon} />
                    </div>
                  ) : (
                    <Tooltip
                      arrow
                      classes={{
                        arrow: classes.helpIconArrow,
                        tooltip: classes.helpIconTooltip
                      }}
                      open={openStartHelpTooltip}
                      title={
                        TEXT_LABELS.rangeSectionStartValueHelpTooltipMessage
                      }
                      TransitionComponent={Zoom}
                    >
                      <IconButton
                        className={classes.helpIcon}
                        onClick={handleShowStartHelpTooltip}
                      >
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={classes.textFieldWrapper}>
            <TextField
              error={isEndEmpty || isEqual || isInvalid}
              fullWidth
              id="outlined-basic"
              label={TEXT_LABELS.rangeSectionEndValueLabel}
              onChange={e => handleEndChange(e)}
              onFocus={handleEndInputFocus}
              onKeyDown={handleSubmitOnEnter}
              type="number"
              value={endValue}
              variant="outlined"
            />
            <div className={classes.iconWrapper}>
              {isEndEmpty || isEqual || isInvalid ? (
                <Tooltip
                  arrow
                  classes={{
                    arrow: classes.errorIconArrow,
                    tooltip: classes.errorIconTooltip
                  }}
                  open={openEndErrorTooltip}
                  title={endErrorTooltipTitle}
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    className={classes.errorIcon}
                    onClick={handleShowEndErrorTooltip}
                  >
                    <ErrorIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <div
                  className={
                    endValue ? classes.checkIconWrapper : classes.iconWrapper
                  }
                >
                  {endValue ? (
                    <div className={classes.checkIconContainer}>
                      <CheckCircleIcon className={classes.checkIcon} />
                    </div>
                  ) : (
                    <Tooltip
                      arrow
                      classes={{
                        arrow: classes.helpIconArrow,
                        tooltip: classes.helpIconTooltip
                      }}
                      open={openEndHelpTooltip}
                      title={TEXT_LABELS.rangeSectionEndValueHelpTooltipMessage}
                      TransitionComponent={Zoom}
                    >
                      <IconButton
                        className={classes.helpIcon}
                        onClick={handleShowEndHelpTooltip}
                      >
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={classes.textFieldWrapper}>
            <TextField
              error={isStepEmpty || !isStepValid}
              fullWidth
              id="outlined-basic"
              label={TEXT_LABELS.rangeSectionStepValueLabel}
              onChange={e => handleStepChange(e)}
              onFocus={handleStepInputFocus}
              onKeyDown={handleSubmitOnEnter}
              type="number"
              value={stepValue}
              variant="outlined"
            />
            <div className={classes.iconWrapper}>
              {isStepEmpty || !isStepValid ? (
                <Tooltip
                  arrow
                  classes={{
                    arrow: classes.errorIconArrow,
                    tooltip: classes.errorIconTooltip
                  }}
                  open={openStepErrorTooltip}
                  title={
                    isStepEmpty
                      ? TEXT_LABELS.rangeSectionStepValueErrorTooltipMessage
                      : TEXT_LABELS.rangeSectionInvalidStepValueErrorTooltipMessage
                  }
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    className={classes.errorIcon}
                    onClick={handleShowStepErrorTooltip}
                  >
                    <ErrorIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <div
                  className={
                    stepValue ? classes.checkIconWrapper : classes.iconWrapper
                  }
                >
                  {stepValue ? (
                    <div className={classes.checkIconContainer}>
                      <CheckCircleIcon className={classes.checkIcon} />
                    </div>
                  ) : (
                    <Tooltip
                      arrow
                      classes={{
                        arrow: classes.helpIconArrow,
                        tooltip: classes.helpIconTooltip
                      }}
                      open={openStepHelpTooltip}
                      title={
                        TEXT_LABELS.rangeSectionStepValueHelpTooltipMessage
                      }
                      TransitionComponent={Zoom}
                    >
                      <IconButton
                        className={classes.helpIcon}
                        onClick={handleShowStepHelpTooltip}
                      >
                        <InfoIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              )}
            </div>
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
