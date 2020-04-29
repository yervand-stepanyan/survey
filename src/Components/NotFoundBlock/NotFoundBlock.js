import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {
  CONNECTION_ERROR,
  CONNECTION_ERROR_REFRESH_BUTTON,
  NOT_FOUND_404,
  NOT_FOUND_RETURN_BUTTON,
  NOT_FOUND_TEXT
} from '../../Globals/variables';
import ROUTES from '../../Routes/Routes';
import { useStyles } from './NotFoundBlock.style';

function NotFoundBlock({ isConnectionError }) {
  const classes = useStyles();

  const handleRefreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className={classes.notFoundBlockContainer}>
      {isConnectionError ? (
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography color="error" variant="h2">
              {CONNECTION_ERROR}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              onClick={handleRefreshPage}
              variant="contained"
            >
              <Typography variant="h5">
                {CONNECTION_ERROR_REFRESH_BUTTON}
              </Typography>
            </Button>
          </CardActions>
        </Card>
      ) : (
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography color="error" variant="h1">
              {NOT_FOUND_404}
            </Typography>
            <Typography color="error" variant="h4">
              {NOT_FOUND_TEXT}
            </Typography>
          </CardContent>
          <CardActions>
            <Link className={classes.link} to={ROUTES.home}>
              <Button color="primary" variant="contained">
                <Typography variant="h5">{NOT_FOUND_RETURN_BUTTON}</Typography>
              </Button>
            </Link>
          </CardActions>
        </Card>
      )}
    </div>
  );
}

NotFoundBlock.propTypes = {
  isConnectionError: PropTypes.bool.isRequired
};

export default NotFoundBlock;
