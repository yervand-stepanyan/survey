import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import removeSpaces from '../../../helpers/removeSpaces';
import SurveyContext from '../../../State/context';
import { useStyles } from './OptionsContainer.style';

const BUTTON_LABEL = 'Submit & continue';
const BUTTON_ACCEPT_CHANGES_LABEL = 'Accept changes';
const CHECKBOX_LABEL = 'Add an input field as the last option';
const INPUT_LABEL = 'Option';
const INPUT_TOOLTIP_LABEL = 'Input custom option name';

function OptionsContainer({ type, answers, hasLastInput }) {
  const classes = useStyles();
  const [checked, setChecked] = useState(hasLastInput || false);
  const [chip, setChip] = useState({});
  const [customOptionId, setCustomOptionId] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(!!answers || false);
  const [isTooltip, setIsTooltip] = useState(false);
  const [isTyped, setIsTyped] = useState(false);
  const [option, setOption] = useState('');
  const [options, setOptions] = useState(answers || []);
  const inputEl = useRef(null);
  const {
    handleAddAnswers,
    handleHasLastInput,
    handleSubmitQuestion
    // disableSave
  } = useContext(SurveyContext);

  const handleInputChange = event => {
    setOption(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsEmpty(true);

      setIsTyped(false);
    } else {
      setIsEmpty(false);

      setIsTyped(true);
    }
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      const filteredOption = removeSpaces(option);
      const id = uuid();

      if (filteredOption) {
        setOptions(
          chip.id
            ? options.map(opt =>
                opt.id === chip.id
                  ? { id: chip.id, option: filteredOption }
                  : opt
              )
            : [...options, { id, option: filteredOption }]
        );

        setOption('');

        setChip({});

        setIsTyped(false);

        if (checked && !customOptionId) {
          setCustomOptionId(id);

          setIsTooltip(false);
        }

        if (isSubmitted) {
          setIsChanged(true);
        }

        // disableSave(true);
      } else {
        setIsEmpty(true);
      }

      if (checked) {
        setOptions(prevState => {
          const optionId = customOptionId || id;
          const lastOption = prevState.find(opt => opt.id === optionId);
          const filteredOptions = prevState.filter(
            opt => opt.id !== lastOption.id
          );

          return [...filteredOptions, lastOption];
        });
      }

      setIsSubmitted(false);
    }
  };

  const handleChipClick = chipToEdit => () => {
    if (!isTyped) {
      setOption(chipToEdit.option);

      setChip(chipToEdit);

      setIsEmpty(false);

      inputEl.current.focus();
    }
  };

  const handleChipDelete = chipToDelete => () => {
    setOptions(() => options.filter(opt => opt.id !== chipToDelete));

    if (customOptionId === chipToDelete) {
      setChecked(false);

      setCustomOptionId('');
    }

    if (isSubmitted) {
      setIsChanged(true);

      setIsSubmitted(false);
    }

    // disableSave(true);
  };

  const handleCheckboxChange = event => {
    setChecked(event.target.checked);

    setOption('');

    if (event.target.checked) {
      inputEl.current.focus();

      setIsTooltip(true);

      handleHasLastInput(true);

      if (isSubmitted) {
        // disableSave(true);
      }
      // else disableSave(false);
    } else {
      setIsTooltip(false);

      setOptions(options.filter(opt => opt.id !== customOptionId));

      setCustomOptionId('');

      handleHasLastInput(
        false,
        options.filter(opt => opt.id !== customOptionId)
      );

      // if (isSubmitted) {
      //   disableSave(false);
      //
      //   setIsChanged(true);
      //
      //   setIsSubmitted(false);
      // }
      // else disableSave(false);
    }
  };

  const handleSubmit = () => {
    handleAddAnswers(options);

    handleSubmitQuestion({ type: 'answers', answers: options });

    // disableSave(false);

    setIsSubmitted(true);
  };

  return (
    <div className={classes.optionsContainer}>
      <div className={classes.inputWrapper}>
        <div className={classes.textFieldWrapper}>
          <Tooltip
            open={isTooltip}
            placement="top-start"
            title={INPUT_TOOLTIP_LABEL}
            TransitionComponent={Zoom}
          >
            <TextField
              autoFocus
              error={isEmpty}
              fullWidth
              id="outlined-basic"
              inputRef={inputEl}
              label={INPUT_LABEL}
              onChange={e => handleInputChange(e)}
              onKeyDown={handleSubmitOnEnter}
              value={option}
              variant="outlined"
            />
          </Tooltip>
        </div>
      </div>
      <div className={classes.chipsWrapper}>
        <div className={classes.root}>
          {options.map(opt => (
            <Tooltip
              arrow
              key={opt.id}
              title={opt.option}
              TransitionComponent={Zoom}
            >
              <Chip
                className={classes.chip}
                clickable
                color="primary"
                label={opt.option}
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
              label={CHECKBOX_LABEL}
            />
          </div>
        </div>
      ) : null}
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={options.length < 2 || isSubmitted}
          onClick={handleSubmit}
          size="large"
          variant="contained"
        >
          {isChanged ? BUTTON_ACCEPT_CHANGES_LABEL : BUTTON_LABEL}
        </Button>
      </div>
    </div>
  );
}

OptionsContainer.propTypes = {
  answers: PropTypes.array,
  hasLastInput: PropTypes.bool,
  type: PropTypes.string
};

OptionsContainer.defaultProps = {
  answers: undefined,
  hasLastInput: false,
  type: ''
};

export default OptionsContainer;
