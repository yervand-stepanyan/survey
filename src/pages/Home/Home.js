import React from 'react';

import HomeBlock from '../../components/HomeBlock/HomeBlock';
import Loader from '../../components/Loader';
import { LOADER_TYPE } from '../../globals/constants';
import { useStore } from '../../state/use-store';
import { useStyles } from './Home.style';

function Home() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <div className={classes.homeContainer}>
      {loadingData ? <Loader type={LOADER_TYPE.page} /> : <HomeBlock />}
    </div>
  );
}

export default Home;
