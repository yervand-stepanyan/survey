import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const TITLE = 'Create survey';

function CreateSurveyBlock({ classes }) {
  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <Typography variant="h4">{TITLE}</Typography>
      </div>
    </div>
  );
}

CreateSurveyBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CreateSurveyBlock;
