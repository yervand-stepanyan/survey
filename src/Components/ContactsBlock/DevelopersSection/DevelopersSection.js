import React from 'react';

import DeveloperInfo from '../DeveloperInfo';
import { DEVELOPERS } from '../../../Globals/variables';
import { useStyles } from './DevelopersSection.style';

function DevelopersSection() {
  const classes = useStyles();

  return (
    <div className={classes.developersSection}>
      {DEVELOPERS.map(developer => (
        <DeveloperInfo developer={developer} key={developer.email} />
      ))}
    </div>
  );
}

export default DevelopersSection;
