import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import dropdownImage from '../../../assets/images/answerOptions/dropdown-menu-720x420.png';
import checkboxImage from '../../../assets/images/answerOptions/checkboxes-720x420.png';
import inputImage from '../../../assets/images/answerOptions/inputfield-720x420.png';
import radiobuttonImage from '../../../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../../../assets/images/answerOptions/range-slider-720x420.png';

const IMAGES = [
  { name: 'input', src: inputImage, tooltip: 'Input field' },
  { name: 'radiobutton', src: radiobuttonImage, tooltip: 'Radiobutton' },
  { name: 'checkbox', src: checkboxImage, tooltip: 'Checkbox' },
  { name: 'dropdown', src: dropdownImage, tooltip: 'Dropdown' },
  { name: 'range', src: rangeImage, tooltip: 'Range' }
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
        <Tooltip
          title={img.tooltip}
          TransitionComponent={Zoom}
          arrow
          key={img.name}
        >
          <div
            className={
              image === img.name
                ? classes.imageContainerClicked
                : classes.imageContainer
            }
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
        </Tooltip>
      ))}
    </div>
  );
}

AnswerOptions.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AnswerOptions;
