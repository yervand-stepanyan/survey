import React, { useState, useReducer, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';

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
  const [snackbarText, setSnackbarText] = useState('');
  const [loadingData, setLoadingData] = useState(true);
  const [isConnectionError, setIsConnectionError] = useState(false);
  const [stateSurvey, dispatchSurvey] = useReducer(surveyReducer, []);
  const [stateSurveyAnswer, dispatchSurveyAnswer] = useReducer(
    surveyAnswerReducer,
    []
  );

  const getData = async () => {
    try {
      setLoadingData(true);

      const surveys = await doGet('surveys');
      const surveyAnswers = await doGet('survey-answers');
      const reversedSurveys = await surveys.slice().reverse();

      dispatchSurvey({ type: 'ADD_SURVEYS', payload: reversedSurveys });
      dispatchSurveyAnswer({
        type: 'ADD_SURVEY_ANSWERS',
        payload: surveyAnswers
      });
    } catch (e) {
      setLoadingData(false);

      setIsConnectionError(true);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleOpenSnackbar = () => {
    setOpen(true);
  };

  const handleShowSnackbar = (bool, text) => {
    setShowSuccess(bool);

    setSnackbarText(text);
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
          stateSurveyAnswer,
          dispatchSurvey,
          dispatchSurveyAnswer,
          handleOpenSnackbar,
          handleShowSnackbar,
          isConnectionError,
          loadingData
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
              <Route path={`${ROUTES.results}/:id`}>
                <Results />
              </Route>
              <Route path={ROUTES.about}>
                <About />
              </Route>
              <Route path={ROUTES.contacts}>
                <Contacts />
              </Route>
              <Route path="*">
                <Redirect to={ROUTES.home} />
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
        snackbarText={snackbarText}
      />
    </div>
  );
}

export default Main;

// doGet('surveys')
//   .then(res => {
//     const reversedArray = res.slice().reverse();
//
//     dispatchSurvey({ type: 'ADD_SURVEYS', payload: reversedArray });
//
//     setLoadingData(false);
//   })
//   .catch(() => setLoadingData(false));
//
// doGet('survey-answers')
//   .then(res => {
//     dispatchSurveyAnswer({ type: 'ADD_SURVEY_ANSWERS', payload: res });
//
//     setLoadingData(false);
//   })
//   .catch(() => setLoadingData(false));
