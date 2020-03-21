import React from 'react';
import PropTypes from 'prop-types';

function HomeBlock(props) {
  const { classes } = props;

  return <div className={classes.container}>HomeBlock works!!!</div>;
}

HomeBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default HomeBlock;
