import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { BUTTON_LABELS } from '../../../Globals/variables';
import ButtonLoader from '../../Loaders/ButtonLoader';
import { useStyles } from './SaveSurvey.style';

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
          {BUTTON_LABELS.saveSurvey}
        </Button>
        {loading && <ButtonLoader color="green" />}
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
