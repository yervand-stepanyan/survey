import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../helpers/removeSpaces';
import { useStyles } from './QuestionCreator.style';

const CANCEL_BUTTON_LABEL = 'Cancel';
const QUESTION_ERROR_PLACEHOLDER = '* Invalid Question';
const QUESTION_LABEL = 'Question:';
const QUESTION_PLACEHOLDER = '* Question';
const SUBMIT_BUTTON_LABEL = 'Submit';

function QuestionCreator({
  activeId,
  handleAddQuestion,
  handleCancelQuestion,
  question: questionProps,
  questionsLength
}) {
  const classes = useStyles();
  const [isEmpty, setIsEmpty] = useState(false);
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
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const handleSubmit = () => {
    const filteredQuestion = removeSpaces(question);

    if (filteredQuestion) {
      handleAddQuestion(activeId, filteredQuestion);
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

  const handleCancel = () => {
    handleCancelQuestion();
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
            error={isEmpty}
            fullWidth
            id="outlined-basic"
            inputRef={inputEl}
            label={!isEmpty ? QUESTION_PLACEHOLDER : QUESTION_ERROR_PLACEHOLDER}
            onChange={e => handleChange(e)}
            onKeyDown={handleSubmitOnEnter}
            variant="outlined"
            value={question}
          />
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={!question || isEmpty}
          onClick={handleSubmit}
          size="large"
          variant="contained"
        >
          {SUBMIT_BUTTON_LABEL}
        </Button>
        {questionsLength && !questionProps ? (
          <Button
            className={classes.cancelButton}
            color="secondary"
            onClick={handleCancel}
            size="large"
            variant="contained"
          >
            {CANCEL_BUTTON_LABEL}
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
