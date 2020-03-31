import React, { useState, useRef, useContext, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../Helpers/removeSpaces';
import SurveyContext from '../../../State/context';
import { useStyles } from './SurveyTitleCreator.style';

const BUTTON_LABEL = 'Submit';
const TITLE_ERROR_PLACEHOLDER = '* Invalid Title';
const TITLE_PLACEHOLDER = '* Title';
const TITLE_TEXT = 'Survey title:';

function SurveyTitleCreator() {
  const classes = useStyles();
  const { state, dispatch } = useContext(SurveyContext);
  const { surveyDispatch } = useContext(SurveyContext);
  const [title, setTitle] = useState(state.title);
  const [isEmpty, setIsEmpty] = useState(true);
  const inputEl = useRef(null);

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
      dispatch({ type: 'SET_TITLE', payload: removeSpaces(title) });
      surveyDispatch({ type: 'ADD_TITLE', payload: removeSpaces(title) });
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

export default SurveyTitleCreator;
