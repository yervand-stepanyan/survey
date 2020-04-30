import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PollIcon from '@material-ui/icons/Poll';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import { HOME_ICON_TOOLTIPS } from '../../../Globals/variables';
import ButtonLoader from '../../Loaders/ButtonLoader';
import ROUTES from '../../../Routes/Routes';
import { useStyles } from './SurveyComponent.style';

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
    <Card className={classes.card}>
      <div className={classes.surveyComponentContainer}>
        <div className={classes.surveyTitleContainer}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </div>

        <div className={classes.takeAndResultsCellsContainer}>
          <Link to={`${ROUTES.survey}/${id}`}>
            <Tooltip title={HOME_ICON_TOOLTIPS.take} arrow>
              <IconButton
                className={classes.takeSurveyButton}
                aria-label="take-survey"
                color="primary"
                variant="contained"
                disabled={buttonToLoad === id && loadingButton}
                onClick={() => handleButtonClick()}
              >
                <QuestionAnswerRoundedIcon />
              </IconButton>
            </Tooltip>
          </Link>
          {buttonToLoad === id && loadingButton && (
            <ButtonLoader color="green" />
          )}
          <Link to={`${ROUTES.results}/${id}`}>
            <Tooltip title={HOME_ICON_TOOLTIPS.results} arrow>
              <IconButton
                className={classes.resultsButton}
                disabled={buttonToLoad === id && loadingButton}
                onClick={() => handleButtonClick()}
                variant="round"
              >
                <PollIcon />
              </IconButton>
            </Tooltip>
          </Link>
          {buttonToLoad === id && loadingButton && (
            <ButtonLoader color="blue" />
          )}

          <Tooltip title={HOME_ICON_TOOLTIPS.remove} arrow>
            <IconButton
              className={classes.removeButton}
              aria-label="remove"
              disabled={buttonToLoad === id && loadingRemove}
              onClick={() => handleRemoveSurvey(id)}
              variant="contained"
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {buttonToLoad === id && loadingRemove && (
            <ButtonLoader color="pink" />
          )}
        </div>
      </div>
    </Card>
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
