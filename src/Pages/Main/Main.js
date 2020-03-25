import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Components/Header';
import Home from '../Home';
import Footer from '../../Components/Footer';

function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Main;
