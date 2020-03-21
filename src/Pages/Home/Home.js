import React from 'react';
import PropTypes from 'prop-types';

import HomeBlock from '../../Components/HomeBlock';
import AdPanel from '../../Components/AdPanel';
import OurPartnersBlock from '../../Components/OurPartnersBlock';

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <div>Home Works!!!</div>
      <HomeBlock />
      <AdPanel />
      <OurPartnersBlock />
    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Home;
