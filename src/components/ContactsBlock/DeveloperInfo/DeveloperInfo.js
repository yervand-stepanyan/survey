import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './DeveloperInfo.style';

function DeveloperInfo({ developer }) {
  const classes = useStyles();

  return (
    <Card className={classes.developerInfo} key={developer.email}>
      <div className={classes.developersName}>
        <Typography variant="h6">
          {`${developer.firstName} ${developer.lastName}`}
        </Typography>
      </div>

      <div className={classes.socialWrapper}>
        <List component="div" className={classes.socialSection}>
          <Link color="inherit" href={`tel:${developer.phone}`} target="_blank">
            <ListItem>
              <ListItemIcon className={classes.phoneIcon}>
                <PhoneIcon />
              </ListItemIcon>
              <ListItemText primary={developer.phone} />
            </ListItem>
          </Link>
          <Link
            color="inherit"
            href={`mailto:${developer.email}`}
            target="_blank"
          >
            <ListItem>
              <ListItemIcon className={classes.emailIcon}>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={developer.email} />
            </ListItem>
          </Link>
          <Link color="inherit" href={developer.githubPageURL} target="_blank">
            <ListItem>
              <ListItemIcon className={classes.githubIcon}>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary={developer.githubPageURL} />
            </ListItem>
          </Link>
          <Link
            color="inherit"
            href={developer.linkedInPageURL}
            target="_blank"
          >
            <ListItem>
              <ListItemIcon className={classes.linkedInIcon}>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary={developer.linkedInPageURL} />
            </ListItem>
          </Link>
        </List>
      </div>
    </Card>
  );
}

DeveloperInfo.propTypes = {
  developer: PropTypes.object.isRequired
};

export default DeveloperInfo;
