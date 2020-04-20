import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
// material ui
import {
  Card,
  CardActions,
  Button,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Survey from '../Survey';
import logo from '../../../assets/images/logo/logo.png';

import { useStyles } from './Surveys.style';

function Surveys({ surveys }) {
  const classes = useStyles();

  const [tempSurveys, setTempsurveys] = useState(surveys);

  const handleChangeSurveyStatus = id => {
    const newTempSurveys = surveys.map(item => {
      if (item.surveyId === id) {
        item.open = !item.open;
      }
      return item;
    });

    setTempsurveys(newTempSurveys);
  };

  const isSomeSurveyOpen = tempSurveys.some(survey => survey.open === true);
  const openSurvey = tempSurveys.find(survey => survey.open === true);
  console.log(openSurvey);

  return (
    <div>
      <Switch>
        <Route path="/survey" exact>
          <div className={classes.surveysWrapper}>
            {tempSurveys.map(survey => {
              return (
                <Card className={classes.surveyCard} key={survey.surveyId}>
                  <CardMedia
                    className={classes.media}
                    image={logo}
                    title="Contemplative Reptile"
                  />
                  <CardContent className={classes.surveyNameWrapper}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {survey.surveyName}
                    </Typography>
                  </CardContent>

                  <CardActions>
                    {survey.open ? (
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<AssignmentIcon />}
                        onClick={() =>
                          handleChangeSurveyStatus(survey.surveyId)
                        }
                      >
                        Close
                      </Button>
                    ) : (
                      <Link to={`/survey/${survey.surveyId}`}>
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          endIcon={<AssignmentIcon />}
                          onClick={() =>
                            handleChangeSurveyStatus(survey.surveyId)
                          }
                          disabled={isSomeSurveyOpen}
                        >
                          Take
                        </Button>
                      </Link>
                    )}
                  </CardActions>
                </Card>
              );
            })}
          </div>
        </Route>
        {openSurvey ? (
          <Route path={`/survey/${openSurvey.surveyId}`} exact>
            <Survey survey={openSurvey} />
          </Route>
        ) : null}
      </Switch>
    </div>
  );
}

Surveys.propTypes = {
  surveys: PropTypes.array.isRequired
};

export default Surveys;
