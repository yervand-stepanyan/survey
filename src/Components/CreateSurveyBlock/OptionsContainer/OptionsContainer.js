import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import {
  ANSWER_SECTION_BUTTON_ACCEPT_CHANGES_LABEL,
  ANSWER_SECTION_BUTTON_LABEL,
  TEXT_LABELS
} from '../../../Globals/variables';
import removeSpaces from '../../../helpers/removeSpaces';
import { useStore } from '../../../State/use-store';
import { useStyles } from './OptionsContainer.style';
import TooltipIconComponent from '../TooltipIconComponent';

function OptionsContainer({
  activeId,
  answers: answersProps,
  hasLastInput,
  type
}) {
  const classes = useStyles();
  const [answers, setAnswers] = useState(answersProps || []);
  const [checked, setChecked] = useState(hasLastInput || false);
  const [chip, setChip] = useState({});
  const [customAnswerId, setCustomAnswerId] = useState(
    answersProps.length && hasLastInput
      ? answersProps[answersProps.length - 1].id
      : ''
  );
  const [isAnswerRemoved, setIsAnswerRemoved] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSendIconDisabled, setIsSendIconDisabled] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(
    !!answersProps.length || false
  );
  const [isTooltip, setIsTooltip] = useState(false);
  const [isTyped, setIsTyped] = useState(false);
  const [openErrorTooltip, setOpenErrorTooltip] = useState(false);
  const [openInfoTooltip, setOpenInfoTooltip] = useState(false);
  const [title, setTitle] = useState('');
  const inputEl = useRef(null);
  const {
    disableSave,
    handleAddAnswers,
    handleHasLastInput,
    handleSubmitQuestion
  } = useStore();

  useEffect(() => {
    handleAddAnswers(activeId, answers, checked);
  }, [answers]);

  const handleInputChange = event => {
    setTitle(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsEmpty(true);

      setIsTyped(false);

      disableSave(false);

      setIsSendIconDisabled(true);
    } else {
      setIsEmpty(false);

      setIsTyped(true);

      disableSave(true);

      setIsSendIconDisabled(false);
    }
  };

  const handleSendIconClick = () => {
    const filteredTitle = removeSpaces(title);
    const id = uuid();

    if (filteredTitle) {
      setAnswers(
        chip.id
          ? answers.map(opt =>
              opt.id === chip.id ? { id: chip.id, title: filteredTitle } : opt
            )
          : [...answers, { id, title: filteredTitle }]
      );

      setTitle('');

      setChip({});

      setIsTyped(false);

      if (checked && !customAnswerId) {
        setCustomAnswerId(id);

        setIsTooltip(false);
      }

      if (activeId && isSubmitted) {
        setIsChanged(true);
      }

      disableSave(true);
    } else {
      setIsEmpty(true);
    }

    if (checked) {
      setAnswers(prevState => {
        const answerId = customAnswerId || id;
        const lastAnswer = prevState.find(opt => opt.id === answerId);
        const filteredAnswers = prevState.filter(
          opt => opt.id !== lastAnswer.id
        );

        return [...filteredAnswers, lastAnswer];
      });
    }

    setIsSubmitted(false);

    setIsAnswerRemoved(false);

    // inputEl.current.focus();
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSendIconClick();
    }
  };

  const handleChipClick = chipToEdit => () => {
    if (!isTyped) {
      setTitle(chipToEdit.title);

      setChip(chipToEdit);

      setIsEmpty(false);

      inputEl.current.focus();

      disableSave(true);
    }
  };

  const handleChipDelete = id => () => {
    setAnswers(() => answers.filter(opt => opt.id !== id));

    handleAddAnswers(
      activeId,
      answers.filter(opt => opt.id !== id),
      false
    );

    if (customAnswerId === id) {
      setChecked(false);

      setCustomAnswerId('');
    }

    if (isSubmitted) {
      setIsChanged(true);

      setIsSubmitted(false);
    }

    disableSave(true);

    setIsAnswerRemoved(true);
  };

  const handleCheckboxChange = event => {
    setChecked(event.target.checked);

    setTitle('');

    if (event.target.checked) {
      inputEl.current.focus();

      setIsTooltip(true);

      handleHasLastInput(activeId, true);

      if (isSubmitted) {
        disableSave(true);
      } else {
        setIsSubmitted(true);
      }
    } else {
      const removedAnswer = answers.find(opt => opt.id === customAnswerId);

      setIsTooltip(false);

      setAnswers(answers.filter(opt => opt.id !== customAnswerId));

      handleHasLastInput(
        activeId,
        false,
        answers.filter(opt => opt.id !== customAnswerId)
      );

      setCustomAnswerId('');

      if (isSubmitted) {
        if (isTyped) {
          if (isChanged) {
            setIsChanged(true);

            setIsSubmitted(false);
          } else {
            disableSave(false);
          }

          setIsTyped(false);
        } else if (removedAnswer || isChanged) {
          setIsChanged(true);

          setIsSubmitted(false);

          disableSave(true);
        } else {
          disableSave(false);
        }
      }
    }
  };

  const handleSubmit = () => {
    handleSubmitQuestion(activeId);

    setIsSubmitted(true);

    setIsChanged(false);
  };

  const handleShowErrorTooltip = () => {
    setOpenErrorTooltip(!openErrorTooltip);
  };

  const handleShowInfoTooltip = () => {
    setOpenInfoTooltip(!openInfoTooltip);
  };

  const handleInputFocus = () => {
    setOpenErrorTooltip(false);

    setOpenInfoTooltip(false);
  };

  return (
    <div className={classes.optionsContainer}>
      <div className={classes.contentWrapper}>
        <div className={classes.contentSection}>
          <div className={classes.textFieldSection}>
            <div className={classes.textFieldAndIconWrapper}>
              <Tooltip
                open={isTooltip}
                placement="top-start"
                title={TEXT_LABELS.optionsContainerInputTooltipLabel}
                TransitionComponent={Zoom}
              >
                <TextField
                  autoFocus={!activeId}
                  error={isEmpty}
                  fullWidth
                  id="outlined-basic"
                  InputProps={{ className: classes.inputField }}
                  inputRef={inputEl}
                  label={TEXT_LABELS.optionsContainerInputLabel}
                  onChange={e => handleInputChange(e)}
                  onFocus={handleInputFocus}
                  onKeyDown={handleSubmitOnEnter}
                  value={title}
                  variant="outlined"
                />
              </Tooltip>
              <div className={classes.sendIconWrapper}>
                <IconButton
                  color="primary"
                  disabled={isSendIconDisabled || !isTyped}
                  onClick={handleSendIconClick}
                >
                  <SendIcon fontSize="large" />
                </IconButton>
              </div>
            </div>
          </div>
          <div className={classes.chipsWrapper}>
            <div className={classes.chipsRoot}>
              {answers.map(opt => (
                <Tooltip
                  arrow
                  key={opt.id}
                  title={opt.title}
                  TransitionComponent={Zoom}
                >
                  <Chip
                    className={classes.chip}
                    clickable
                    color="primary"
                    label={opt.title}
                    onClick={handleChipClick(opt)}
                    onDelete={handleChipDelete(opt.id)}
                  />
                </Tooltip>
              ))}
            </div>
          </div>
          {type === 'addInput' ? (
            <div className={classes.checkboxWrapper}>
              <div className={classes.checkboxSection}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleCheckboxChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label={TEXT_LABELS.optionsContainerCheckboxLabel}
                />
              </div>
            </div>
          ) : null}
        </div>
        <div className={classes.iconContainer}>
          <TooltipIconComponent
            checkOrInfoCondition={answers.length >= 2}
            errorCondition={
              (answers.length === 1 && isAnswerRemoved) ||
              (isAnswerRemoved && isChanged)
            }
            errorMessageTitle={TEXT_LABELS.optionsContainerTooltipMessage}
            handleShowErrorTooltip={handleShowErrorTooltip}
            handleShowInfoTooltip={handleShowInfoTooltip}
            infoMessageTitle={TEXT_LABELS.optionsContainerTooltipMessage}
            openErrorTooltip={openErrorTooltip}
            openInfoTooltip={openInfoTooltip}
          />
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={answers.length < 2 || isSubmitted}
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
  );
}

OptionsContainer.propTypes = {
  activeId: PropTypes.string.isRequired,
  answers: PropTypes.array,
  hasLastInput: PropTypes.bool,
  type: PropTypes.string
};

OptionsContainer.defaultProps = {
  answers: [],
  hasLastInput: false,
  type: ''
};

export default OptionsContainer;
