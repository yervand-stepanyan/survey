import React from 'react';
import PropTypes from 'prop-types';

function QuestionSection({ classes }) {
  return <div className={classes.container} />;
}

QuestionSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default QuestionSection;
