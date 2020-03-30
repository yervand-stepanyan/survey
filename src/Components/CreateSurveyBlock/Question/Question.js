import React from 'react';
import PropTypes from 'prop-types';

function Question({ classes }) {
  return <div className={classes.container}>Question Section</div>;
}

Question.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Question;
