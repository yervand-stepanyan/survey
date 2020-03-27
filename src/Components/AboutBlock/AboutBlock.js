import React from 'react';
import PropTypes from 'prop-types';

function AboutBlock({ classes }) {
  return <div className={classes.container}>AboutBlock works!!!</div>;
}

AboutBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AboutBlock;
