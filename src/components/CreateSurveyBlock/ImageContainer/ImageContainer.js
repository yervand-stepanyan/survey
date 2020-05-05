import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import { TABINDEX } from '../../../globals/constants';

function ImageContainer({
  classes,
  handleCardClick,
  handleCardEnterKey,
  imageClicked,
  type
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
          tabIndex={TABINDEX}
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
  type: PropTypes.object.isRequired
};

ImageContainer.defaultProps = {
  imageClicked: null
};

export default ImageContainer;
