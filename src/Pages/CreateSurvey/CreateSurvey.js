import React from 'react';
import PropTypes from 'prop-types';

import CreateSurveyBlock from '../../Components/CreateSurveyBlock';

function CreateSurvey({ classes }) {
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
