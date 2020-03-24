import React from 'react';
import PropTypes from 'prop-types';

import Home from '../Home';
import Header from "../../Components/Header";


function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <div className={classes.headerContainer}>
        <Header />
      </div>
      <Home />
      <div className={classes.footerContainer}>Footer</div>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Main;