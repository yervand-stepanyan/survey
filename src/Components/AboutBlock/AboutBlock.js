import React from 'react';
import PropTypes from 'prop-types';

function AboutBlock(props) {
  const { classes } = props;

  return <div className={classes.container}>AboutBlock works!!!</div>;
}

AboutBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AboutBlock;
