import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import ErrorIcon from '@material-ui/icons/Error';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import { BUTTON_LABELS, TEXT_LABELS } from '../../../Globals/variables';
import removeSpaces from '../../../helpers/removeSpaces';
import { useStyles } from './SurveyTitleCreator.style';

function SurveyTitleCreator({ handleAddTitle, title: titleProps }) {
  const classes = useStyles();
  const [isEmpty, setIsEmpty] = useState(true);
  const [title, setTitle] = useState(titleProps);
  const [openErrorTooltip, setOpenErrorTooltip] = useState(false);
  const [openHelpTooltip, setOpenHelpTooltip] = useState(false);
  const inputEl = useRef(null);

  useEffect(() => {
    if (title) {
      inputEl.current.focus();
    }
  }, [title]);

  const handleChange = event => {
    setTitle(event.target.value);

    if (removeSpaces(event.target.value)) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const handleSubmit = () => {
    const filteredTitle = removeSpaces(title);

    if (filteredTitle) {
      handleAddTitle(filteredTitle);
    } else {
      setIsEmpty(false);
    }
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      if (isEmpty) {
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
            error={!isEmpty}
            fullWidth
            id="outlined-basic"
            inputRef={inputEl}
            label={
              isEmpty
                ? TEXT_LABELS.surveyTitleCreatorInputLabel
                : TEXT_LABELS.surveyTitleCreatorInputErrorLabel
            }
            onChange={e => handleChange(e)}
            onFocus={handleInputFocus}
            onKeyDown={handleSubmitOnEnter}
            variant="outlined"
            value={title}
          />
          <div className={classes.iconWrapper}>
            {isEmpty ? (
              <Tooltip
                arrow
                classes={{
                  arrow: classes.helpIconArrow,
                  tooltip: classes.helpIconTooltip
                }}
                open={openHelpTooltip}
                title={TEXT_LABELS.surveyTitleCreatorHelpTooltipMessage}
                TransitionComponent={Zoom}
              >
                <IconButton
                  className={classes.helpIcon}
                  onClick={handleShowHelpTooltip}
                >
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip
                arrow
                classes={{
                  arrow: classes.errorIconArrow,
                  tooltip: classes.errorIconTooltip
                }}
                open={openErrorTooltip}
                title={TEXT_LABELS.surveyTitleCreatorErrorTooltipMessage}
                TransitionComponent={Zoom}
              >
                <IconButton
                  className={classes.errorIcon}
                  onClick={handleShowErrorTooltip}
                >
                  <ErrorIcon />
                </IconButton>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={!title || !isEmpty}
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
