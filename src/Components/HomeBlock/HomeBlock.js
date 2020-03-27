import React from 'react';
import PropTypes from 'prop-types';

function HomeBlock({ classes }) {
  return <div className={classes.container}>HomeBlock works!!!</div>;
}

HomeBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default HomeBlock;
