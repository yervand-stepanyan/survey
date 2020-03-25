import React from 'react';
import PropTypes from 'prop-types';

function About(props) {
  const { classes } = props;

  return <div className={classes.container}>About Page works!!!</div>;
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default About;
