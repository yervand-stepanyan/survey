import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import {
  BUTTON_LABEL,
  LOADER_COLOR,
  LOADER_TYPE
} from '../../../globals/constants';
import Loader from '../../Loader';
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
          {BUTTON_LABEL.saveSurvey}
        </Button>
        {loading && (
          <Loader color={LOADER_COLOR.green} type={LOADER_TYPE.button} />
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
