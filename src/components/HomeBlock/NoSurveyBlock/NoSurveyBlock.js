import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { NO_SURVEY, NO_SURVEY_CREATE_BUTTON } from '../../../globals/constants';
import ROUTES from '../../../routes/Routes';
import { useStyles } from './NoSurveyBlock.style';

function NoSurveyBlock() {
  const classes = useStyles();

  return (
    <div className={classes.noSurveyBlockContainer}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography color="error" variant="h2">
            {NO_SURVEY}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={ROUTES.create} className={classes.link}>
            <Button color="primary" variant="contained">
              <Typography variant="h5">{NO_SURVEY_CREATE_BUTTON}</Typography>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default NoSurveyBlock;
