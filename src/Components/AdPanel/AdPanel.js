import React from 'react';

import { useStyles } from './AdPanel.style';

const adImageIRL = 'https://bit.ly/aca-logo';
const adURL = 'https://bit.ly/aca-url';

function AdPanel() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <a href={adURL} target="_blank" rel="noreferrer noopener">
        <div className={classes.imageWrapper}>
          <img src={adImageIRL} alt="ad" className={classes.adImage} />
        </div>
      </a>
    </div>
  );
}

export default AdPanel;
