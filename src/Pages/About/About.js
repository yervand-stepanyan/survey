import React from 'react';

import AboutBlock from '../../Components/AboutBlock';
import { useStyles } from './About.style';

function About() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <AboutBlock />
    </div>
  );
}

export default About;
