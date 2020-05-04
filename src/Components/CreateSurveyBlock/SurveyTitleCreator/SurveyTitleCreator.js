import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { BUTTON_LABELS, TEXT_LABELS } from '../../../Globals/variables';
import removeSpaces from '../../../helpers/removeSpaces';
import TooltipIconComponent from '../TooltipIconComponent';
import { useStyles } from './SurveyTitleCreator.style';

function SurveyTitleCreator({ handleAddTitle, title: titleProps }) {
  const classes = useStyles();
  const [acceptedTitle, setAcceptedTitle] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const [openErrorTooltip, setOpenErrorTooltip] = useState(false);
  const [openHelpTooltip, setOpenHelpTooltip] = useState(false);
  const [title, setTitle] = useState(titleProps);
  const inputEl = useRef(null);

  useEffect(() => {
    if (title) {
      inputEl.current.focus();
    }
  }, [title]);

  const handleChange = event => {
    setTitle(event.target.value);

    if (removeSpaces(event.target.value)) {
      setIsEmpty(false);

      setAcceptedTitle(removeSpaces(event.target.value));
    } else {
      setIsEmpty(true);

      setAcceptedTitle(removeSpaces(event.target.value));
    }
  };

  const handleSubmit = () => {
    const filteredTitle = removeSpaces(title);

    if (filteredTitle) {
      handleAddTitle(filteredTitle);
    } else {
      setIsEmpty(true);
    }
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      if (!isEmpty) {
        handleSubmit();
      }
    }
  };

  const handleShowErrorTooltip = () => {
    setOpenErrorTooltip(!openErrorTooltip);
  };

  const handleShowHelpTooltip = () => {
    setOpenHelpTooltip(!openHelpTooltip);
  };

  const handleInputFocus = () => {
    setOpenErrorTooltip(false);

    setOpenHelpTooltip(false);
  };

  return (
    <div className={classes.surveyTitleCreatorContainer}>
      <div className={classes.textFieldWrapper}>
        <div className={classes.titleLabel}>
          <Typography variant="h5">
            {TEXT_LABELS.surveyTitleCreatorSurveyTitleLabel}
          </Typography>
        </div>
        <div className={classes.textFieldSection}>
          <TextField
            error={isEmpty}
            fullWidth
            id="outlined-basic"
            inputRef={inputEl}
            label={
              !isEmpty
                ? TEXT_LABELS.surveyTitleCreatorInputLabel
                : TEXT_LABELS.surveyTitleCreatorInputErrorLabel
            }
            onChange={e => handleChange(e)}
            onFocus={handleInputFocus}
            onKeyDown={handleSubmitOnEnter}
            variant="outlined"
            value={title}
          />
          <TooltipIconComponent
            checkOrInfoCondition={!!acceptedTitle}
            errorCondition={isEmpty}
            errorMessageTitle={
              TEXT_LABELS.surveyTitleCreatorErrorTooltipMessage
            }
            handleShowErrorTooltip={handleShowErrorTooltip}
            handleShowHelpTooltip={handleShowHelpTooltip}
            helpMessageTitle={TEXT_LABELS.surveyTitleCreatorHelpTooltipMessage}
            openErrorTooltip={openErrorTooltip}
            openHelpTooltip={openHelpTooltip}
          />
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={!title || isEmpty}
          onClick={handleSubmit}
          size="large"
          variant="contained"
        >
          {BUTTON_LABELS.surveyTitleCreatorSubmit}
        </Button>
      </div>
    </div>
  );
}

SurveyTitleCreator.propTypes = {
  handleAddTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default SurveyTitleCreator;
