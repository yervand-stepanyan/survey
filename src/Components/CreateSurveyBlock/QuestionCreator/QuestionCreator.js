import React, { useEffect, useRef, useState } from 'react';
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
import { useStyles } from './QuestionCreator.style';

function QuestionCreator({
  activeId,
  handleAddQuestion,
  handleCancelQuestion,
  question: questionProps,
  questionsLength
}) {
  const classes = useStyles();
  const [isEmpty, setIsEmpty] = useState(true);
  const [openErrorTooltip, setOpenErrorTooltip] = useState(false);
  const [openHelpTooltip, setOpenHelpTooltip] = useState(false);
  const [question, setQuestion] = useState(questionProps);
  const inputEl = useRef(null);

  useEffect(() => {
    if (question) {
      inputEl.current.focus();
    }
  }, [question]);

  const handleChange = event => {
    setQuestion(event.target.value);

    if (removeSpaces(event.target.value)) {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };

  const handleSubmit = () => {
    const filteredQuestion = removeSpaces(question);

    if (filteredQuestion) {
      handleAddQuestion(activeId, filteredQuestion);
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

  const handleCancel = () => {
    handleCancelQuestion();
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
    <div className={classes.questionCreatorContainer}>
      <div className={classes.textFieldWrapper}>
        <div className={classes.titleLabel}>
          <Typography variant="h5">
            {TEXT_LABELS.questionCreatorQuestionLabel}
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
                ? TEXT_LABELS.questionCreatorInputLabel
                : TEXT_LABELS.questionCreatorInputErrorLabel
            }
            onChange={e => handleChange(e)}
            onFocus={handleInputFocus}
            onKeyDown={handleSubmitOnEnter}
            variant="outlined"
            value={question}
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
                title={TEXT_LABELS.questionCreatorHelpTooltipMessage}
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
                title={TEXT_LABELS.questionCreatorErrorTooltipMessage}
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
          disabled={!question || !isEmpty}
          onClick={handleSubmit}
          size="large"
          variant="contained"
        >
          {BUTTON_LABELS.questionCreatorSubmit}
        </Button>
        {questionsLength && !questionProps ? (
          <Button
            className={classes.cancelButton}
            color="secondary"
            onClick={handleCancel}
            size="large"
            variant="contained"
          >
            {BUTTON_LABELS.questionCreatorCancel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}

QuestionCreator.propTypes = {
  activeId: PropTypes.string.isRequired,
  handleAddQuestion: PropTypes.func.isRequired,
  handleCancelQuestion: PropTypes.func,
  question: PropTypes.string.isRequired,
  questionsLength: PropTypes.number.isRequired
};

QuestionCreator.defaultProps = {
  handleCancelQuestion: undefined
};

export default QuestionCreator;
