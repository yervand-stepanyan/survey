import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../helpers/removeSpaces';
import { useStyles } from './SurveyTitleCreator.style';

const BUTTON_LABEL = 'Submit';
const TITLE_ERROR_PLACEHOLDER = '* Invalid Title';
const TITLE_PLACEHOLDER = '* Title';
const TITLE_TEXT = 'Survey title:';

function SurveyTitleCreator({ handleAddTitle, title: titleProps }) {
  const classes = useStyles();
  const [isEmpty, setIsEmpty] = useState(true);
  const [title, setTitle] = useState(titleProps);
  const inputEl = useRef(null);

  useEffect(() => {
    if (title) inputEl.current.focus();
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

    if (filteredTitle) handleAddTitle(filteredTitle);
    else setIsEmpty(false);
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') if (isEmpty) handleSubmit();
  };

  return (
    <div className={classes.surveyTitleCreatorContainer}>
      <div className={classes.textFieldWrapper}>
        <div className={classes.titleLabel}>
          <Typography variant="h5">{TITLE_TEXT}</Typography>
        </div>
        <div className={classes.textFieldSection}>
          <TextField
            error={!isEmpty}
            fullWidth
            id="outlined-basic"
            inputRef={inputEl}
            label={isEmpty ? TITLE_PLACEHOLDER : TITLE_ERROR_PLACEHOLDER}
            onChange={e => handleChange(e)}
            onKeyDown={handleSubmitOnEnter}
            variant="outlined"
            value={title}
          />
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
          {BUTTON_LABEL}
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
