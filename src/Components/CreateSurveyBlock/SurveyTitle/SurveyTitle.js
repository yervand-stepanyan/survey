import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const TITLE_TEXT = "Survey's title:";
const TITLE_PLACEHOLDER = 'Title';
const BUTTON_LABEL = 'Submit';

function SurveyTitle({ classes }) {
  const [title, setTitle] = useState('');
  const inputEl = useRef(null);

  const handleSubmit = () => {
    setTitle('');
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      handleSubmit();
      inputEl.current.blur();
    }
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
            label={TITLE_PLACEHOLDER}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={handleSubmitOnEnter}
            inputRef={inputEl}
            variant="outlined"
            value={title}
          />
        </div>
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          onClick={handleSubmit}
        >
          {BUTTON_LABEL}
        </Button>
      </div>
    </div>
  );
}

SurveyTitle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SurveyTitle;
