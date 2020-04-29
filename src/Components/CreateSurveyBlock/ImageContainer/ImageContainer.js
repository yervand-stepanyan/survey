import React from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

function ImageContainer({
  classes,
  handleClick,
  handleEnterKey,
  // handleTextClick,
  imageClicked,
  img,
  tabIndex
}) {
  return (
    <div className={classes.typeImage} key={img.name}>
      <div
        className={classes.textContainer}
        // onClick={e => handleTextClick(e)}
        // onKeyDown={e => handleEnterKey(e)}
        // role="button"
        // tabIndex={tabIndex}
      >
        <Typography
          className={
            imageClicked === img.name ? classes.textClicked : classes.text
          }
          gutterBottom
          variant="subtitle1"
        >
          {img.text}
        </Typography>
      </div>
      <Tooltip
        arrow
        key={img.name}
        title={img.tooltip}
        TransitionComponent={Zoom}
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
            alt={img.name}
            className={
              imageClicked === img.name ? classes.imageClicked : classes.image
            }
            src={img.src}
          />
        </div>
      </Tooltip>
    </div>
  );
}

ImageContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleEnterKey: PropTypes.func.isRequired,
  imageClicked: PropTypes.string,
  img: PropTypes.object.isRequired,
  tabIndex: PropTypes.number
};

ImageContainer.defaultProps = {
  imageClicked: null,
  tabIndex: 0
};

export default ImageContainer;
