import React, { useState, useRef, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../Helpers/removeSpaces';
import { useStyles } from './SurveyTitleCreator.style';
import SurveyContext from '../../../State/context';

const BUTTON_LABEL = 'Submit';
const TITLE_ERROR_PLACEHOLDER = '* Invalid Title';
const TITLE_PLACEHOLDER = '* Title';
const TITLE_TEXT = 'Survey title:';

function SurveyTitleCreator({
  title: titleProps,
  setTitle: setTitleProps,
  setIsTitle
}) {
  const classes = useStyles();
  const [title, setTitle] = useState(titleProps);
  const [isEmpty, setIsEmpty] = useState(true);
  const inputEl = useRef(null);
  const { stateSurvey, dispatchSurvey } = useContext(SurveyContext);

  useEffect(() => {
    if (title) inputEl.current.focus();
  }, [title]);

  const handleChange = event => {
    setTitle(event.target.value);

    if (event.target.value) setIsEmpty(true);
    else setIsEmpty(false);
  };

  const handleSubmit = () => {
    if (title) {
      const activeId = stateSurvey.length
        ? stateSurvey[stateSurvey.length - 1].id
        : uuid();
      const filteredTitle = removeSpaces(title);
      const surveyData = { id: activeId, title: filteredTitle };

      setIsTitle(true);

      setTitleProps(filteredTitle);

      dispatchSurvey({ type: 'ADD_TITLE', payload: surveyData });
    } else setIsEmpty(false);
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') if (isEmpty) handleSubmit();
  };

  return (
    <div className={classes.container}>
      <div className={classes.textFieldWrapper}>
        <div className={classes.titleLabel}>
          <Typography variant="h5">{TITLE_TEXT}</Typography>
        </div>
        <div className={classes.textFieldSection}>
          <TextField
            id="outlined-basic"
            fullWidth
            label={isEmpty ? TITLE_PLACEHOLDER : TITLE_ERROR_PLACEHOLDER}
            error={!isEmpty}
            onChange={e => handleChange(e)}
            onKeyDown={handleSubmitOnEnter}
            inputRef={inputEl}
            variant="outlined"
            value={title}
          />
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={!title}
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
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setIsTitle: PropTypes.func.isRequired
};

export default SurveyTitleCreator;
