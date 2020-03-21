import React from 'react';
import PropTypes from 'prop-types';

function OurPartnersBlock(props) {
  const { classes } = props;

  return <div className={classes.container}>OurPartnersBlock works!!!</div>;
}

OurPartnersBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default OurPartnersBlock;
