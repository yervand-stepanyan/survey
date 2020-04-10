import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { useStyles } from './SaveSurvey.style';

const BUTTON_LABEL = 'Save';

function SaveSurvey({ disabled }) {
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <div className={classes.saveSurveyContainer}>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={disabled}
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

SaveSurvey.propTypes = {
  disabled: PropTypes.bool.isRequired
};

export default SaveSurvey;
