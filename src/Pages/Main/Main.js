import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../About';
import Header from '../../Components/Header';
import Home from '../Home';
import ROUTES from '../../Routes/Routes';
import Footer from '../../Components/Footer';

function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.mainContainer}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROUTES.home}>
            <Home />
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Main;
