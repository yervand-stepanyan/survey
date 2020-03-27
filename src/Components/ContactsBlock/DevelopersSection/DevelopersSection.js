import React from 'react';
import PropTypes from 'prop-types';

import DeveloperInfo from '../DeveloperInfo';

const DEVELOPERS = [
  {
    firstName: 'Sose',
    lastName: 'Lastname',
    email: 'karnosose@gmail.com',
    phone: '+37493212564',
    githubPageURL: process.env.REACT_APP_SOSE_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_SOSE_LINKEDIN_URL
  },
  {
    firstName: 'Yervand',
    lastName: 'Stepanyan',
    email: 'yervand.stepanyan@gmail.com',
    phone: '+37498772777',
    githubPageURL: process.env.REACT_APP_YERVAND_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_YERVAND_LINKEDIN_URL
  },
  {
    firstName: 'Davit',
    lastName: 'Sahakyan',
    email: 'sahakyandavit92@gmail.com',
    phone: '+37498000065',
    githubPageURL: process.env.REACT_APP_DAVIT_GITHUB_URL,
    linkedInPageURL: process.env.REACT_APP_DAVIT_LINKEDIN_URL
  }
];

function DevelopersSection({ classes }) {
  return (
    <div className={classes.developersSection}>
      {DEVELOPERS.map(developer => (
        <DeveloperInfo developer={developer} key={developer.email} />
      ))}
    </div>
  );
}

DevelopersSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default DevelopersSection;
