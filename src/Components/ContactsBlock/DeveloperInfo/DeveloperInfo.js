import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import emailIcon from '../../../assets/icons/email-240px.png';
import githubIcon from '../../../assets/icons/github-240px.png';
import linkedInIcon from '../../../assets/icons/linkedin-240px.png';
import phoneIcon from '../../../assets/icons/phone-240px.png';

function DeveloperInfo({ classes, developer }) {
  return (
    <div className={classes.developerInfo} key={developer.email}>
      <div>
        <Typography variant="h6">
          {`${developer.firstName} ${developer.lastName}`}
        </Typography>
      </div>
      <div className={classes.socialWrapper}>
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
        </div>
      </div>
    </div>
  );
}

DeveloperInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  developer: PropTypes.object.isRequired
};

export default DeveloperInfo;
