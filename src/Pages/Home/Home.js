import React from 'react';

import AdPanel from '../../Components/AdPanel';
import HomeBlock from '../../Components/HomeBlock';
import OurPartnersBlock from '../../Components/OurPartnersBlock';
import { useStyles } from './Home.style';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.homeAndAdsWrapper}>
        <HomeBlock />
        <AdPanel />
      </div>
      <OurPartnersBlock />
    </div>
  );
}

export default Home;
