import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

function ImageContainer({
  classes,
  handleCardClick,
  handleCardEnterKey,
  imageClicked,
  type,
  tabIndex
}) {
  return (
    <Card className={classes.card} key={type.name}>
      <Tooltip
        arrow
        key={type.name}
        title={type.tooltip}
        TransitionComponent={Zoom}
      >
        <div
          className={
            imageClicked === type.name
              ? classes.textImageContainerClicked
              : classes.textImageContainer
          }
          onClick={e => handleCardClick(e, type.name)}
          onKeyDown={e => handleCardEnterKey(e, type.name)}
          role="button"
          tabIndex={tabIndex}
        >
          <div className={classes.textContainer}>
            <Typography
              className={
                imageClicked === type.name ? classes.textClicked : classes.text
              }
              gutterBottom
              variant="subtitle1"
            >
              {type.text}
            </Typography>
          </div>
          <div
            className={
              imageClicked === type.name
                ? classes.imageContainerClicked
                : classes.imageContainer
            }
          >
            <img
              alt={type.name}
              className={
                imageClicked === type.name
                  ? classes.imageClicked
                  : classes.image
              }
              src={type.src}
            />
          </div>
        </div>
      </Tooltip>
    </Card>
  );
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  handleCardClick: PropTypes.func.isRequired,
  handleCardEnterKey: PropTypes.func.isRequired,
  imageClicked: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.object.isRequired
};

ImageContainer.defaultProps = {
  imageClicked: null,
  tabIndex: 0
};

export default ImageContainer;
