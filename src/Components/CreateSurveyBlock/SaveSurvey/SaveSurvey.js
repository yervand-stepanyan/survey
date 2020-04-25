import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from './SaveSurvey.style';

const BUTTON_LABEL = 'Save';

function SaveSurvey({ disabled, handleSave, loading }) {
  const classes = useStyles();

  return (
    <div className={classes.saveSurveyContainer}>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={loading || disabled}
          onClick={handleSave}
          size="large"
          variant="contained"
        >
          {BUTTON_LABEL}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            thickness={8}
            className={classes.buttonProgress}
          />
        )}
      </div>
    </div>
  );
}

SaveSurvey.propTypes = {
  disabled: PropTypes.bool.isRequired,
  handleSave: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired
};

export default SaveSurvey;
