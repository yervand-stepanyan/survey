import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';

function ImageContainer({
  classes,
  img,
  imageClicked,
  tabIndex,
  handleClick,
  handleEnterKey
}) {
  return (
    <div className={classes.typeImage} key={img.name}>
      <Typography
        variant="subtitle1"
        className={
          imageClicked === img.name ? classes.textClicked : classes.text
        }
        gutterBottom
      >
        {img.text}
      </Typography>
      <Tooltip
        title={img.tooltip}
        TransitionComponent={Zoom}
        arrow
        key={img.name}
      >
        <div
          className={
            imageClicked === img.name
              ? classes.imageContainerClicked
              : classes.imageContainer
          }
          onClick={e => handleClick(e)}
          onKeyDown={e => handleEnterKey(e)}
          role="button"
          tabIndex={tabIndex}
        >
          <img
            src={img.src}
            alt={img.name}
            className={
              imageClicked === img.name ? classes.imageClicked : classes.image
            }
          />
        </div>
      </Tooltip>
    </div>
  );
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  img: PropTypes.object.isRequired,
  imageClicked: PropTypes.string,
  tabIndex: PropTypes.number,
  handleClick: PropTypes.func.isRequired,
  handleEnterKey: PropTypes.func.isRequired
};

ImageContainer.defaultProps = {
  imageClicked: null,
  tabIndex: 0
};

export default ImageContainer;
