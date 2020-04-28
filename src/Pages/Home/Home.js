import React from 'react';

import HomeBlock from '../../Components/HomeBlock/HomeBlock';
import PageLoader from '../../Components/Loaders/PageLoader';
import { useStore } from '../../State/use-store';
import { useStyles } from './Home.style';

function Home() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <div className={classes.homeContainer}>
      {loadingData ? <PageLoader /> : <HomeBlock />}
    </div>
  );
}

export default Home;
