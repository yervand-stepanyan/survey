import React from 'react';
import PropTypes from 'prop-types';

function AnswerOptions({ classes }) {
  return <div className={classes.container} />;
}

AnswerOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AnswerOptions;
