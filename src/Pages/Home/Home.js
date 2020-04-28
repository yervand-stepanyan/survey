import React from 'react';

import HomeBlock from '../../Components/HomeBlock/HomeBlock';
import { useStyles } from './Home.style';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.homeContainer}>
      <HomeBlock />
    </div>
  );
}

export default Home;
