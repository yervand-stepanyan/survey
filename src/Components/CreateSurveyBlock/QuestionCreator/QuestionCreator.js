import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../helpers/removeSpaces';
import { useStyles } from './QuestionCreator.style';

const BUTTON_LABEL = 'Submit';
const QUESTION_ERROR_PLACEHOLDER = '* Invalid Question';
const QUESTION_LABEL = 'Question:';
const QUESTION_PLACEHOLDER = '* Question';

function QuestionCreator({
  activeId,
  handleAddQuestion,
  question: questionProps
}) {
  const classes = useStyles();
  const inputEl = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [question, setQuestion] = useState(questionProps);

  useEffect(() => {
    if (question) inputEl.current.focus();
  }, [question]);

  const handleChange = event => {
    setQuestion(event.target.value);

    if (removeSpaces(event.target.value)) setIsEmpty(true);
    else setIsEmpty(false);
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
            error={!isEmpty}
            fullWidth
            id="outlined-basic"
            inputRef={inputEl}
            label={isEmpty ? QUESTION_PLACEHOLDER : QUESTION_ERROR_PLACEHOLDER}
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
  activeId: PropTypes.string.isRequired,
  handleAddQuestion: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired
};

QuestionCreator.defaultProps = {
  // activeId: ''
};

export default QuestionCreator;
