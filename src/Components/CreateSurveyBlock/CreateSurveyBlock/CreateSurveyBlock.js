import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import SurveyTitle from '../SurveyTitle';

const BLOCK_TITLE = 'Create survey';

function CreateSurveyBlock({ classes }) {
  return (
    <div className={classes.container}>
      <div className={classes.blockTitleWrapper}>
        <Typography variant="h4">{BLOCK_TITLE}</Typography>
      </div>
      <div className={classes.createSurveyWrapper}>
        <SurveyTitle />
      </div>
    </div>
  );
}

CreateSurveyBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CreateSurveyBlock;
