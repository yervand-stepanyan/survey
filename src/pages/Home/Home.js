import React from 'react';

import HomeBlock from '../../components/HomeBlock/HomeBlock';
import PageLoader from '../../components/Loaders/PageLoader';
import { useStore } from '../../state/use-store';
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
