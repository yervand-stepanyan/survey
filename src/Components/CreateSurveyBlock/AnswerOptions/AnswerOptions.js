import React, { useState } from 'react';
import PropTypes from 'prop-types';

import inputImage from '../../../assets/images/answerOptions/textfields-720x420.png';
import radiobuttonImage from '../../../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../../../assets/images/answerOptions/range-slider-720x420.png';

const IMAGE_NAMES = { first: 'input', second: 'radiobutton', third: 'range' };

function AnswerOptions({ classes }) {
  const [image, setImage] = useState(null);

  const handleImageClick = e => {
    if (e.target.alt) setImage(e.target.alt);
    else setImage(e.target.children[0].alt);
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') handleImageClick(e);
  };

  return (
    <div className={classes.container}>
      <div
        className={
          image === IMAGE_NAMES.first
            ? classes.imageContainerClicked
            : classes.imageContainer
        }
        onClick={e => handleImageClick(e)}
        onKeyDown={e => handleEnterKey(e)}
        role="button"
        tabIndex={0}
      >
        <img
          src={inputImage}
          alt={IMAGE_NAMES.first}
          className={
            image === IMAGE_NAMES.first ? classes.imageClicked : classes.image
          }
        />
      </div>
      <div
        className={
          image === IMAGE_NAMES.second
            ? classes.imageContainerClicked
            : classes.imageContainer
        }
        onClick={e => handleImageClick(e)}
        onKeyDown={e => handleEnterKey(e)}
        role="button"
        tabIndex={0}
      >
        <img
          src={radiobuttonImage}
          alt={IMAGE_NAMES.second}
          className={
            image === IMAGE_NAMES.second ? classes.imageClicked : classes.image
          }
        />
      </div>
      <div
        className={
          image === IMAGE_NAMES.third
            ? classes.imageContainerClicked
            : classes.imageContainer
        }
        onClick={e => handleImageClick(e)}
        onKeyDown={e => handleEnterKey(e)}
        role="button"
        tabIndex={0}
      >
        <img
          src={rangeImage}
          alt={IMAGE_NAMES.third}
          className={
            image === IMAGE_NAMES.third ? classes.imageClicked : classes.image
          }
        />
      </div>
    </div>
  );
}

AnswerOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AnswerOptions;
