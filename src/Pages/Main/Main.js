import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../Components/Header';
import Home from '../Home';

function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <Header />
      <Home />
      <div className={classes.footerContainer}>Footer</div>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Main;
