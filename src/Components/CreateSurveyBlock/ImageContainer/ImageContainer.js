import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

function ImageContainer({
  classes,
  handleEnterKey,
  handleImageClick,
  handleTextClick,
  handleTextEnterKey,
  imageClicked,
  type,
  tabIndex
}) {
  return (
    <div className={classes.typeImage} key={type.name}>
      <div
        className={
          imageClicked === type.name
            ? classes.textContainerClicked
            : classes.textContainer
        }
        onClick={() => handleTextClick(type.name)}
        onKeyDown={e => handleTextEnterKey(e, type.name)}
        role="button"
        tabIndex={tabIndex}
      >
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
      <Tooltip
        arrow
        key={type.name}
        title={type.tooltip}
        TransitionComponent={Zoom}
      >
        <div
          className={
            imageClicked === type.name
              ? classes.imageContainerClicked
              : classes.imageContainer
          }
          onClick={e => handleImageClick(e)}
          onKeyDown={e => handleEnterKey(e)}
          role="button"
          tabIndex={tabIndex}
        >
          <img
            alt={type.name}
            className={
              imageClicked === type.name ? classes.imageClicked : classes.image
            }
            src={type.src}
          />
        </div>
      </Tooltip>
    </div>
  );
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  handleEnterKey: PropTypes.func.isRequired,
  handleImageClick: PropTypes.func.isRequired,
  handleTextClick: PropTypes.func.isRequired,
  handleTextEnterKey: PropTypes.func.isRequired,
  imageClicked: PropTypes.string,
  tabIndex: PropTypes.number,
  type: PropTypes.object.isRequired
};

ImageContainer.defaultProps = {
  imageClicked: null,
  tabIndex: 0
};

export default ImageContainer;
