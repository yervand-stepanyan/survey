import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import checkboxImage from '../../../assets/images/answerOptions/checkboxes-720x420.png';
import dropdownImage from '../../../assets/images/answerOptions/dropdown-menu-720x420.png';
import inputImage from '../../../assets/images/answerOptions/inputfield-720x420.png';
import radiobuttonImage from '../../../assets/images/answerOptions/radiobuttons-720x420.png';
import rangeImage from '../../../assets/images/answerOptions/range-slider-720x420.png';
import ImageContainer from '../ImageContainer';
import SurveyContext from '../../../State/context';
import { useStyles } from './AnswerOptions.style';

const TYPES = [
  {
    name: 'INPUT',
    src: inputImage,
    tooltip: 'Input field',
    text: 'Input field'
  },
  {
    name: 'RADIOBUTTON',
    src: radiobuttonImage,
    tooltip: 'Radiobutton',
    text: 'Radiobutton'
  },
  {
    name: 'CHECKBOX',
    src: checkboxImage,
    tooltip: 'Checkbox',
    text: 'Checkbox'
  },
  {
    name: 'DROPDOWN',
    src: dropdownImage,
    tooltip: 'Dropdown',
    text: 'Dropdown list'
  },
  { name: 'RANGE', src: rangeImage, tooltip: 'Range', text: 'Range' }
];

function AnswerOptions({ activeId, answerType: answerTypeProps, setType }) {
  const classes = useStyles();
  const [answerType, setAnswerType] = useState(answerTypeProps || '');
  const { disableSave, handleAddAnswerType } = useContext(SurveyContext);

  const handleClick = e => {
    const type = e.target.alt ? e.target.alt : e.target.children[0].alt;

    setAnswerType(type);

    setType(type);

    handleAddAnswerType(activeId, type);

    disableSave(true);
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') handleClick(e);
  };

  return (
    <div className={classes.answerOptionsContainer}>
      {TYPES.map(img => (
        <ImageContainer
          classes={classes}
          handleClick={handleClick}
          handleEnterKey={handleEnterKey}
          imageClicked={answerType}
          img={img}
          key={img.name}
        />
      ))}
    </div>
  );
}

AnswerOptions.propTypes = {
  activeId: PropTypes.string.isRequired,
  answerType: PropTypes.string,
  setType: PropTypes.func.isRequired
};

AnswerOptions.defaultProps = {
  answerType: ''
};

export default AnswerOptions;
