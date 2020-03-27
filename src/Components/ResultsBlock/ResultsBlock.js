import React from 'react';
import PropTypes from 'prop-types';

function ResultsBlock({ classes }) {
  return <div className={classes.container}>ResultsBlock works!!!</div>;
}

ResultsBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ResultsBlock;
