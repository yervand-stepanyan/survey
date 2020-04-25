import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import PollIcon from '@material-ui/icons/Poll';

import CircularProgress from '@material-ui/core/CircularProgress';

import { doDelete } from '../../../FetchAPI/fetchData';
import ROUTES from '../../../Routes/Routes';
import SurveyContext from '../../../State/context';
import { useStyles } from './Surveys.style';

const RESULTS_BUTTON_LABEL = 'Results';
const SNACKBAR_MESSAGE_ERROR = 'Something went wrong. Try again!';
const SNACKBAR_MESSAGE_SUCCESS = 'Survey removed!';
const TAKE_SURVEY_BUTTON_LABEL = 'Take survey';

function Surveys() {
  const classes = useStyles();
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const {
    stateSurvey,
    dispatchSurvey,
    handleOpenSnackbar,
    handleShowSnackbar
  } = useContext(SurveyContext);

  const handleButtonClick = () => {
    setLoadingButton(true);
  };

  const handleRemoveSurvey = async id => {
    try {
      setLoadingRemove(true);

      await doDelete('surveys', id);

      const filteredSurveys = stateSurvey.filter(survey => survey.id !== id);

      dispatchSurvey({ type: 'REMOVE_SURVEY', payload: filteredSurveys });

      handleShowSnackbar(true, SNACKBAR_MESSAGE_SUCCESS);
    } catch (e) {
      setLoadingRemove(false);

      handleShowSnackbar(false, SNACKBAR_MESSAGE_ERROR);
    } finally {
      setLoadingRemove(false);

      handleOpenSnackbar();
    }
  };

  return (
    <div className={classes.surveysContainer}>
      {stateSurvey.map(({ id, title }) => (
        <div className={classes.singleSurveyContainer} key={id}>
          <div>{title}</div>
          <div className={classes.takeAndResultsCellsContainer}>
            <div className={classes.buttonContainer}>
              <Link className={classes.link} to={`${ROUTES.survey}/${id}`}>
                <Button
                  color="primary"
                  disabled={loadingButton}
                  onClick={() => handleButtonClick()}
                  variant="contained"
                >
                  {TAKE_SURVEY_BUTTON_LABEL}
                </Button>
              </Link>
              {loadingButton && (
                <CircularProgress
                  size={24}
                  thickness={8}
                  className={classes.buttonProgress}
                />
              )}
            </div>
            <div className={classes.buttonContainer}>
              <Link className={classes.link} to={`${ROUTES.results}/${id}`}>
                <Button
                  color="primary"
                  disabled={loadingButton}
                  onClick={() => handleButtonClick()}
                  variant="contained"
                >
                  <PollIcon />
                  {RESULTS_BUTTON_LABEL}
                </Button>
              </Link>
              {loadingButton && (
                <CircularProgress
                  size={24}
                  thickness={8}
                  className={classes.buttonProgress}
                />
              )}
            </div>
            <div className={classes.buttonContainer}>
              <Button
                color="secondary"
                disabled={loadingRemove}
                onClick={() => handleRemoveSurvey(id)}
                variant="contained"
              >
                <DeleteIcon />
              </Button>
              {loadingRemove && (
                <CircularProgress
                  size={24}
                  thickness={8}
                  className={classes.buttonRemoveProgress}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Surveys;
