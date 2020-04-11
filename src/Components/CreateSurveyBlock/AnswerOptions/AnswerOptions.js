import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import dropdownImage from '../../../assets/images/answerOptions/dropdown-menu-720x420.png';
import checkboxImage from '../../../assets/images/answerOptions/checkboxes-720x420.png';
import inputImage from '../../../assets/images/answerOptions/inputfield-720x420.png';
import radiobuttonImage from '../../../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../../../assets/images/answerOptions/range-slider-720x420.png';
import ImageContainer from '../ImageContainer';
import { useStyles } from './AnswerOptions.style';
import SurveyContext from '../../../State/context';

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

function AnswerOptions({ setType, answerType }) {
  const classes = useStyles();
  const [image, setImage] = useState(answerType || '');
  const { handleAddAnswerType } = useContext(SurveyContext);

  const handleClick = e => {
    const img = e.target.alt ? e.target.alt : e.target.children[0].alt;

    setImage(img);

    setType(img);

    handleAddAnswerType(img);
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

AnswerOptions.propTypes = {
  answerType: PropTypes.string,
  setType: PropTypes.func.isRequired
};

AnswerOptions.defaultProps = {
  answerType: ''
};

export default AnswerOptions;
