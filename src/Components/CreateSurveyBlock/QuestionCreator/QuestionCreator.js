import React, { useContext, useEffect, useRef, useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../Helpers/removeSpaces';
import SurveyContext from '../../../State/context';
import { useStyles } from './QuestionCreator.style';

const BUTTON_LABEL = 'Submit';
const QUESTION_ERROR_PLACEHOLDER = '* Invalid Question';
const QUESTION_LABEL = 'Question:';
const QUESTION_PLACEHOLDER = '* Question';

function QuestionCreator() {
  const classes = useStyles();
  const { state, dispatch } = useContext(SurveyContext);
  const { surveyDispatch } = useContext(SurveyContext);
  const [question, setQuestion] = useState(state.question);
  const [isEmpty, setIsEmpty] = useState(true);
  const inputEl = useRef(null);

  useEffect(() => {
    if (question) inputEl.current.focus();
  }, [question]);

  const handleChange = event => {
    setQuestion(event.target.value);

    if (event.target.value) setIsEmpty(true);
    else setIsEmpty(false);
  };

  const handleSubmit = () => {
    if (question) {
      dispatch({ type: 'SET_QUESTION', payload: removeSpaces(question) });
      surveyDispatch({ type: 'ADD_QUESTION', payload: removeSpaces(question) });
    } else setIsEmpty(false);
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') if (isEmpty) handleSubmit();
  };

  return (
    <div className={classes.container}>
      <div className={classes.textFieldWrapper}>
        <div className={classes.titleLabel}>
          <Typography variant="h5">{QUESTION_LABEL}</Typography>
        </div>
        <div className={classes.textFieldSection}>
          <TextField
            autoFocus
            id="outlined-basic"
            fullWidth
            label={isEmpty ? QUESTION_PLACEHOLDER : QUESTION_ERROR_PLACEHOLDER}
            error={!isEmpty}
            onChange={e => handleChange(e)}
            onKeyDown={handleSubmitOnEnter}
            inputRef={inputEl}
            variant="outlined"
            value={question}
          />
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={!question}
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

export default QuestionCreator;
