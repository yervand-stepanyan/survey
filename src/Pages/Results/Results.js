import React from 'react';
import PropTypes from 'prop-types';

function Results(props) {
  const { classes } = props;

  return <div className={classes.container}>Results works!!!</div>;
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Results;
