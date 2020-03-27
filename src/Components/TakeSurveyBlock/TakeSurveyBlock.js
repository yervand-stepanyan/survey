import React from 'react';
import PropTypes from 'prop-types';

function TakeSurveyBlock({ classes }) {
  return <div className={classes.container}>TakeSurveyBlock works!!!</div>;
}

TakeSurveyBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TakeSurveyBlock;
