import React from 'react';
import PropTypes from 'prop-types';

import CreateSurveyBlock from '../../Components/CreateSurveyBlock';

function CreateSurvey(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <CreateSurveyBlock />
    </div>
  );
}

CreateSurvey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CreateSurvey;
