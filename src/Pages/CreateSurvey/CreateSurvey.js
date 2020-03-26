import React from 'react';
import PropTypes from 'prop-types';

function CreateSurvey(props) {
  const { classes } = props;

  return <div className={classes.container}>CreateSurvey works!!!</div>;
}

CreateSurvey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CreateSurvey;
