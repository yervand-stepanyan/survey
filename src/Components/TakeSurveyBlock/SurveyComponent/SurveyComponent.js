import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import PollIcon from '@material-ui/icons/Poll';
import { Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import ROUTES from '../../../Routes/Routes';
import { useStyles } from './SurveyComponent.style';

const RESULTS_BUTTON_LABEL = 'Results';
const TAKE_SURVEY_BUTTON_LABEL = 'Take survey';

function SurveyComponent({
  buttonToLoad,
  handleButtonClick,
  handleRemoveSurvey,
  id,
  loadingButton,
  loadingRemove,
  title
}) {
  const classes = useStyles();

  return (
    <div className={classes.singleSurveyContainer}>
      <Typography variant="h6" component="h2">
        {title}
      </Typography>
      <div className={classes.takeAndResultsCellsContainer}>
        <div className={classes.buttonContainer}>
          <Link className={classes.link} to={`${ROUTES.survey}/${id}`}>
            <Button
              disabled={buttonToLoad === id && loadingButton}
              onClick={() => handleButtonClick()}
              variant="contained"
              className={classes.menuItemButton}
            >
              {TAKE_SURVEY_BUTTON_LABEL}
            </Button>
          </Link>
          {buttonToLoad === id && loadingButton && (
            <CircularProgress
              className={classes.buttonProgress}
              size={24}
              thickness={8}
            />
          )}
        </div>
        <div className={classes.buttonContainer}>
          <Link className={classes.link} to={`${ROUTES.results}/${id}`}>
            <Button
              color="primary"
              disabled={buttonToLoad === id && loadingButton}
              onClick={() => handleButtonClick()}
              variant="contained"
            >
              <PollIcon />
              {RESULTS_BUTTON_LABEL}
            </Button>
          </Link>
          {buttonToLoad === id && loadingButton && (
            <CircularProgress
              className={classes.buttonProgress}
              size={24}
              thickness={8}
            />
          )}
        </div>
        <div className={classes.buttonContainer}>
          <Button
            color="secondary"
            disabled={buttonToLoad === id && loadingRemove}
            onClick={() => handleRemoveSurvey(id)}
            variant="contained"
          >
            <DeleteIcon />
          </Button>
          {buttonToLoad === id && loadingRemove && (
            <CircularProgress
              className={classes.buttonRemoveProgress}
              size={24}
              thickness={8}
            />
          )}
        </div>
      </div>
    </div>
  );
}

SurveyComponent.propTypes = {
  buttonToLoad: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleRemoveSurvey: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  loadingButton: PropTypes.bool.isRequired,
  loadingRemove: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default SurveyComponent;
