import React, { useState } from 'react';
import PropTypes from 'prop-types';
// material ui
import { Card, CardHeader, CardActions, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SurveyQuestions from '../SurveyQuestions';

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

  return (
    <div>
      <div className={classes.surveysWrapper}>
        {tempSurveys.map(survey => {
          return (
            <Card className={classes.surveyCard}>
              <CardHeader title={survey.surveyName} />
              <CardActions disableSpacing className={classes.cardActions}>
                {survey.open ? (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<AssignmentIcon />}
                    onClick={() => handleChangeSurveyStatus(survey.surveyId)}
                  >
                    Close
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<AssignmentIcon />}
                    onClick={() => handleChangeSurveyStatus(survey.surveyId)}
                    disabled={isSomeSurveyOpen}
                  >
                    Take
                  </Button>
                )}
              </CardActions>
            </Card>
          );
        })}
      </div>

      <div className={classes.container}>
        {surveys.map(survey => {
          if (survey.open) {
            return (
              <SurveyQuestions
                key={survey.surveyId}
                questions={survey.questions}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

Surveys.propTypes = {
  surveys: PropTypes.array.isRequired
};

export default Surveys;
