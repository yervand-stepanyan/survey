import React from 'react';
import PropTypes from 'prop-types';

function TakeSurvey(props) {
  const { classes } = props;

  return <div className={classes.container}>TakeSurvey works!!!</div>;
}

TakeSurvey.propTypes = {
  classes: PropTypes.object.isRequired
};

export default TakeSurvey;
