import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../About';
import CreateSurvey from '../CreateSurvey';
import Footer from '../../Components/Footer';
import Contacts from '../Contacts';
import Header from '../../Components/Header';
import Home from '../Home';
import Results from '../Results';
import ROUTES from '../../Routes/Routes';
import TakeSurvey from '../TakeSurvey';

function Main({ classes }) {
  return (
    <div className={classes.mainContainer}>
      <Router>
        <Header />
        <Switch>
          <Route exact path={ROUTES.home}>
            <Home />
          </Route>
          <Route path={ROUTES.create}>
            <CreateSurvey />
          </Route>
          <Route path={ROUTES.survey}>
            <TakeSurvey />
          </Route>
          <Route path={ROUTES.results}>
            <Results />
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
          <Route path={ROUTES.contacts}>
            <Contacts />
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
