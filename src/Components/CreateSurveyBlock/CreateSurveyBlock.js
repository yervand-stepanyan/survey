import React from 'react';
import PropTypes from 'prop-types';

function CreateSurveyBlock(props) {
  const { classes } = props;

  return <div className={classes.container}>CreateSurveyBlock works!!!</div>;
}

CreateSurveyBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CreateSurveyBlock;
