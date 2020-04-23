import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../About';
import CreateSurvey from '../CreateSurvey';
import Footer from '../../Components/Footer';
import Contacts from '../Contacts';
import Header from '../../Components/Header';
import Home from '../Home';
import Results from '../Results';
//
import Survey from '../../Components/TakeSurveyBlock/Survey';
import ROUTES from '../../Routes/Routes';
import SurveyContext from '../../State/context';
import { surveyReducer } from '../../State/reducer';
import TakeSurvey from '../TakeSurvey';
import { useStyles } from './Main.style';
// MY LOCAL DATA
import { newData } from '../../Components/TakeSurveyBlock/newData';

function Main() {
  const classes = useStyles();
  const [stateSurvey, dispatchSurvey] = useReducer(surveyReducer, []);

  return (
    <div className={classes.mainContainer}>
      <SurveyContext.Provider value={{ stateSurvey, dispatchSurvey }}>
        <Router>
          <Header />
          <Switch>
            <Route exact path={ROUTES.home}>
              <Home />
            </Route>
            <Route path={ROUTES.create}>
              <CreateSurvey />
            </Route>
            <Route path={`${ROUTES.survey}/:id`}>
              <Survey surveys={newData} />
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
      </SurveyContext.Provider>
    </div>
  );
}

export default Main;
