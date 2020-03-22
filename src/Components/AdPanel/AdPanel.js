import React from 'react';
import PropTypes from 'prop-types';

const adImageIRL = 'https://bit.ly/aca-logo';
const adURL = 'https://bit.ly/aca-url';

function AdPanel(props) {
  const { classes } = props;

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

AdPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AdPanel;
