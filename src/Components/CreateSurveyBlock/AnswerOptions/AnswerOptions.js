import React, { useState } from 'react';

import dropdownImage from '../../../assets/images/answerOptions/dropdown-menu-720x420.png';
import checkboxImage from '../../../assets/images/answerOptions/checkboxes-720x420.png';
import inputImage from '../../../assets/images/answerOptions/inputfield-720x420.png';
import radiobuttonImage from '../../../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../../../assets/images/answerOptions/range-slider-720x420.png';
import ImageContainer from '../../ImageContainer';
import { useStyles } from './AnswerOptions.style';

const IMAGES = [
  { name: 'input', src: inputImage, tooltip: 'Input field' },
  { name: 'radiobutton', src: radiobuttonImage, tooltip: 'Radiobutton' },
  { name: 'checkbox', src: checkboxImage, tooltip: 'Checkbox' },
  { name: 'dropdown', src: dropdownImage, tooltip: 'Dropdown' },
  { name: 'range', src: rangeImage, tooltip: 'Range' }
];

function AnswerOptions() {
  const classes = useStyles();
  const [image, setImage] = useState(null);

  const handleClick = e => {
    if (e.target.alt) setImage(e.target.alt);
    else setImage(e.target.children[0].alt);
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') handleClick(e);
  };

  return (
    <div className={classes.container}>
      {IMAGES.map(img => (
        <ImageContainer
          handleClick={handleClick}
          handleEnterKey={handleEnterKey}
          classes={classes}
          imageClicked={image}
          img={img}
          key={img.name}
        />
      ))}
    </div>
  );
}

export default AnswerOptions;
