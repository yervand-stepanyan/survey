import React, { useContext, useState } from 'react';

import dropdownImage from '../../../assets/images/answerOptions/dropdown-menu-720x420.png';
import checkboxImage from '../../../assets/images/answerOptions/checkboxes-720x420.png';
import inputImage from '../../../assets/images/answerOptions/inputfield-720x420.png';
import radiobuttonImage from '../../../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../../../assets/images/answerOptions/range-slider-720x420.png';
import ImageContainer from '../ImageContainer';
import SurveyContext from '../../../State/context';
import { useStyles } from './AnswerOptions.style';

const IMAGES = [
  {
    name: 'input',
    src: inputImage,
    tooltip: 'Input field',
    text: 'Input field'
  },
  {
    name: 'radiobutton',
    src: radiobuttonImage,
    tooltip: 'Radiobutton',
    text: 'Radiobutton'
  },
  {
    name: 'checkbox',
    src: checkboxImage,
    tooltip: 'Checkbox',
    text: 'Checkbox'
  },
  {
    name: 'dropdown',
    src: dropdownImage,
    tooltip: 'Dropdown',
    text: 'Dropdown list'
  },
  { name: 'range', src: rangeImage, tooltip: 'Range', text: 'Range' }
];

function AnswerOptions() {
  const classes = useStyles();
  const { dispatch } = useContext(SurveyContext);
  const [image, setImage] = useState(null);

  const handleClick = e => {
    const img = e.target.alt ? e.target.alt : e.target.children[0].alt;
    setImage(img);
    dispatch({ type: 'SET_IMAGE_TYPE', payload: img });
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') handleClick(e);
  };

  return (
    <div className={classes.answerOptionsContainer}>
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
