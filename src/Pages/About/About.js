import React from 'react';
import PropTypes from 'prop-types';

import AboutBlock from '../../Components/AboutBlock';

function About({ classes }) {
  return (
    <div className={classes.container}>
      <AboutBlock />
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default About;
