import React, { useState } from 'react';
import PropTypes from 'prop-types';

import inputImage from '../../../assets/images/answerOptions/textfields-720x420.png';
import radiobuttonImage from '../../../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../../../assets/images/answerOptions/range-slider-720x420.png';

const IMAGES = [
  { name: 'input', src: inputImage },
  { name: 'radiobutton', src: radiobuttonImage },
  { name: 'range', src: rangeImage }
];

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
      {IMAGES.map(img => (
        <div
          className={
            image === img.name
              ? classes.imageContainerClicked
              : classes.imageContainer
          }
          key={img.name}
          onClick={e => handleImageClick(e)}
          onKeyDown={e => handleEnterKey(e)}
          role="button"
          tabIndex={0}
        >
          <img
            src={img.src}
            alt={img.name}
            className={
              image === img.name ? classes.imageClicked : classes.image
            }
          />
        </div>
      ))}
    </div>
  );
}

AnswerOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AnswerOptions;
