import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  const { classes } = props;

  return <footer className={classes.container}>Footer works!!</footer>;
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Footer;
