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
import Zoom from '@material-ui/core/Zoom';

import { HOME_ICON_TOOLTIPS } from '../../../globals/constants';
import IconLoader from '../../Loaders/IconLoader';
import ROUTES from '../../../routes/Routes';
import { useStyles } from './SurveyComponent.style';

function SurveyComponent({
  buttonToLoad,
  handleRemoveSurvey,
  handleResultsButtonClick,
  handleTakeSurveyButtonClick,
  id,
  loadingRemove,
  loadingResultsButton,
  loadingTakeSurveyButton,
  title
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={classes.surveyComponentContainer}>
        <div className={classes.surveyTitleContainer}>
          <Typography component="h2" variant="h6">
            {title}
          </Typography>
        </div>
        <div className={classes.takeAndResultsCellsContainer}>
          <Link to={`${ROUTES.survey}/${id}`}>
            <div className={classes.takeSurveyButtonWrapper}>
              <div className={classes.iconWrapper}>
                <Tooltip
                  arrow
                  title={HOME_ICON_TOOLTIPS.take}
                  TransitionComponent={Zoom}
                >
                  <IconButton
                    aria-label="take-survey"
                    className={classes.takeSurveyButton}
                    disabled={buttonToLoad === id && loadingTakeSurveyButton}
                    onClick={() => handleTakeSurveyButtonClick(id)}
                    variant="contained"
                  >
                    <QuestionAnswerRoundedIcon />
                  </IconButton>
                </Tooltip>
                {buttonToLoad === id && loadingTakeSurveyButton && (
                  <IconLoader color="green" />
                )}
              </div>
            </div>
          </Link>
          <Link to={`${ROUTES.results}/${id}`}>
            <div className={classes.iconWrapper}>
              <Tooltip
                arrow
                title={HOME_ICON_TOOLTIPS.results}
                TransitionComponent={Zoom}
              >
                <IconButton
                  className={classes.resultsButton}
                  disabled={buttonToLoad === id && loadingResultsButton}
                  onClick={() => handleResultsButtonClick(id)}
                  variant="round"
                >
                  <PollIcon />
                </IconButton>
              </Tooltip>
              {buttonToLoad === id && loadingResultsButton && (
                <IconLoader color="yellow" />
              )}
            </div>
          </Link>
          <div className={classes.removeButtonWrapper}>
            <div className={classes.iconWrapper}>
              <Tooltip
                arrow
                title={HOME_ICON_TOOLTIPS.remove}
                TransitionComponent={Zoom}
              >
                <IconButton
                  aria-label="remove"
                  className={classes.removeButton}
                  disabled={buttonToLoad === id && loadingRemove}
                  onClick={() => handleRemoveSurvey(id)}
                  variant="contained"
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              {buttonToLoad === id && loadingRemove && (
                <IconLoader color="red" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

SurveyComponent.propTypes = {
  buttonToLoad: PropTypes.string.isRequired,
  handleRemoveSurvey: PropTypes.func.isRequired,
  handleResultsButtonClick: PropTypes.func.isRequired,
  handleTakeSurveyButtonClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  loadingRemove: PropTypes.bool.isRequired,
  loadingResultsButton: PropTypes.bool.isRequired,
  loadingTakeSurveyButton: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
};

export default SurveyComponent;
