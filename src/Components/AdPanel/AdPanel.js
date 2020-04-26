import React from 'react';

import { AD_IMAGE_URL, AD_URL } from '../../Globals/variables';
import { useStyles } from './AdPanel.style';

function AdPanel() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <a href={AD_URL} target="_blank" rel="noreferrer noopener">
        <div className={classes.imageWrapper}>
          <img src={AD_IMAGE_URL} alt="ad" className={classes.adImage} />
        </div>
      </a>
    </div>
  );
}

export default AdPanel;
