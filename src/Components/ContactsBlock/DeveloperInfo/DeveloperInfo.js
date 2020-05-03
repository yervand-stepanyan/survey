import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';


import emailIcon from '../../../assets/icons/email-240px.png';
import githubIcon from '../../../assets/icons/github-240px.png';
import linkedInIcon from '../../../assets/icons/linkedin-240px.png';
import phoneIcon from '../../../assets/icons/phone-240px.png';
import { useStyles } from './DeveloperInfo.style';

function DeveloperInfo({ developer }) {
  const classes = useStyles();

  return (
    <Card className={classes.developerInfo} key={developer.email}>
      <div>
        <Typography variant="h6">
          {`${developer.firstName} ${developer.lastName}`}
        </Typography>
      </div>

      <div className={classes.socialWrapper}>
        <List component="div" className={classes.socialSection}>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={developer.phone} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailOutlineIcon />
            </ListItemIcon>
            <ListItemText primary={developer.email} />
          </ListItem>
          <Link href={developer.githubPageURL} color="inherit">
            <ListItem>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary={developer.email} />
            </ListItem>
          </Link>
          <Link href={developer.linkedInPageURL} color="inherit">
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary={developer.linkedInPageURL} />
            </ListItem>
          </Link>
          
        </List>
      </div>
      {/* <div className={classes.socialWrapper}>
        <div className={classes.socialSection}>
          <div className={classes.iconContainer}>
            <img src={phoneIcon} alt="phone-icon" className={classes.icon} />
          </div>
          <div>
            <span>{developer.phone}</span>
          </div>
        </div>
        <div className={classes.socialSection}>
          <div className={classes.iconContainer}>
            <img src={emailIcon} alt="email-icon" className={classes.icon} />
          </div>
          <div>
            <span>{developer.email}</span>
          </div>
        </div>
        <div className={classes.socialSection}>
          <a
            href={developer.githubPageURL}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <div className={classes.iconContainer}>
              <img
                src={githubIcon}
                alt="github-icon"
                className={classes.icon}
              />
            </div>
            <div>
              <span>{developer.githubPageURL}</span>
            </div>
          </a>
        </div>
        <div className={classes.socialSection}>
          <a
            href={developer.linkedInPageURL}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            <div className={classes.iconContainer}>
              <img
                src={linkedInIcon}
                alt="likedIn-icon"
                className={classes.icon}
              />
            </div>
            <div>
              <span>{developer.linkedInPageURL}</span>
            </div>
          </a>
        </div> */}
      {/* </div> */}
    </Card>

  );
}

DeveloperInfo.propTypes = {
  developer: PropTypes.object.isRequired
};

export default DeveloperInfo;
