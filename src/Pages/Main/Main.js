import React, { useState, useReducer, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from '../About';
import Contacts from '../Contacts';
import CreateSurvey from '../CreateSurvey';
import { doGet } from '../../FetchAPI/fetchData';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Home from '../Home';
import Results from '../Results';
import ROUTES from '../../Routes/Routes';
import ScrollToTop from '../../Components/ScrollToTop';
import SnackbarComponent from '../../Components/SnackbarComponent';
import SurveyContext from '../../State/context';
import TakeSurvey from '../TakeSurvey/TakeSurvey';
import { surveyAnswerReducer, surveyReducer } from '../../State/reducer';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(true);
  const [stateSurvey, dispatchSurvey] = useReducer(surveyReducer, []);
  const [dispatchSurveyAnswer] = useReducer(surveyAnswerReducer, []);

  useEffect(() => {
    doGet('surveys')
      .then(res => {
        const reversedArray = res.slice().reverse();

        dispatchSurvey({ type: 'ADD_SURVEYS', payload: reversedArray });
      })
      .catch();

    doGet('survey-answers')
      .then(res =>
        dispatchSurveyAnswer({ type: 'ADD_SURVEY_ANSWERS', payload: res })
      )
      .catch();
  }, []);

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleShowSuccess = bool => {
    setShowSuccess(bool);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.mainContainer}>
      <SurveyContext.Provider
        value={{
          stateSurvey,
          dispatchSurvey,
          handleOpenSnackbar,
          handleShowSuccess
        }}
      >
        <Router>
          <ScrollToTop>
            <Header />
            <Switch>
              <Route exact path={ROUTES.home}>
                <Home />
              </Route>
              <Route path={ROUTES.create}>
                <CreateSurvey />
              </Route>
              <Route path={`${ROUTES.survey}/:id`}>
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
          </ScrollToTop>
        </Router>
      </SurveyContext.Provider>
      <SnackbarComponent
        onClose={handleClose}
        open={open}
        showSuccess={showSuccess}
      />
    </div>
  );
}

export default Main;
