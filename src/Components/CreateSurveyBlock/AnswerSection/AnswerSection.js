import React from 'react';
import PropTypes from 'prop-types';

function AnswerSection({ classes }) {
  return <div className={classes.container}>Answer Section works</div>;
}

AnswerSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AnswerSection;
