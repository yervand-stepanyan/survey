import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../About';
import Header from '../../Components/Header';
import Home from '../Home';
import ROUTES from '../../Routes/Routes';

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
        <div className={classes.footerContainer}>Footer</div>
      </Router>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Main;
