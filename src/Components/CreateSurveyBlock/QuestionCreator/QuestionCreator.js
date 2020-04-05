import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../Helpers/removeSpaces';
import { useStyles } from './QuestionCreator.style';
import SurveyContext from '../../../State/context';

const BUTTON_LABEL = 'Submit';
const QUESTION_ERROR_PLACEHOLDER = '* Invalid Question';
const QUESTION_LABEL = 'Question:';
const QUESTION_PLACEHOLDER = '* Question';

function QuestionCreator({
  question: questionProps,
  setQuestion: setQuestionProps,
  setIsQuestion
}) {
  const classes = useStyles();
  const [question, setQuestion] = useState(questionProps);
  const [isEmpty, setIsEmpty] = useState(true);
  const inputEl = useRef(null);
  const { dispatchSurvey } = useContext(SurveyContext);

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
      const filteredQuestion = removeSpaces(question);

      setIsQuestion(true);

      setQuestionProps(filteredQuestion);

      dispatchSurvey({ type: 'ADD_QUESTION', payload: filteredQuestion });
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

QuestionCreator.propTypes = {
  question: PropTypes.string.isRequired,
  setQuestion: PropTypes.func.isRequired,
  setIsQuestion: PropTypes.func.isRequired
};

export default QuestionCreator;
