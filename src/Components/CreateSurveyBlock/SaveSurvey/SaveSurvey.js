import React from 'react';

import Button from '@material-ui/core/Button';

import { useStyles } from './SaveSurvey.style';

const BUTTON_LABEL = 'Save';

function SaveSurvey() {
  const classes = useStyles();
  const enabled = false;

  const handleSubmit = () => {};

  return (
    <div className={classes.saveSurveyContainer}>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={enabled}
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

export default SaveSurvey;
