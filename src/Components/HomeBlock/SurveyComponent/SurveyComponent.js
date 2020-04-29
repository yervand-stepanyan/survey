import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card'
import DeleteIcon from '@material-ui/icons/Delete';
import PollIcon from '@material-ui/icons/Poll';
import Typography from '@material-ui/core/Typography';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonLoader from '../../Loaders/ButtonLoader';
import ROUTES from '../../../Routes/Routes';
import { useStyles } from './SurveyComponent.style';

// const RESULTS_BUTTON_LABEL = 'Results';
// const TAKE_SURVEY_BUTTON_LABEL = 'Take survey';

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
          <Typography variant="h6" component="h2" className={classes.surveyTitle}>
            {title}
          </Typography>
        </div>

        <div className={classes.takeAndResultsCellsContainer}>
          <div className={classes.buttonContainer}>
            <Link className={classes.link} to={`${ROUTES.survey}/${id}`}>
              <Tooltip title="Take survey">
                <IconButton 
                  style={{color: '#34A853'}}
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
          </div>
          <div className={classes.buttonContainer}>
            <Link className={classes.link} to={`${ROUTES.results}/${id}`}>
              <Tooltip title="Results">
                <IconButton 
                  style={{color: '#FBBC05'}}
                  className={classes.resultButton}
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
          </div>
          <div className={classes.buttonContainer}>
            <Tooltip title="Delete">
              <IconButton 
                aria-label="delete" 
                style={{color: '#EA4335'}}
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
