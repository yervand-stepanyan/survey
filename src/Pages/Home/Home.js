import React from 'react';
import PropTypes from 'prop-types';

import AdPanel from '../../Components/AdPanel';
import HomeBlock from '../../Components/HomeBlock';
import OurPartnersBlock from '../../Components/OurPartnersBlock';

function Home(props) {
  const { classes } = props;

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

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Home;
