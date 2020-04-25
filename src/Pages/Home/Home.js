import React from 'react';

import Surveys from '../../Components/TakeSurveyBlock/Surveys';
import { useStyles } from './Home.style';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Surveys />
    </div>
  );
}

export default Home;
