import React, { useContext, useState } from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import inputText from '../../../assets/images/inputOptions/input-text.png';
import inputNumber from '../../../assets/images/inputOptions/input-number.png';
import inputDate from '../../../assets/images/inputOptions/input-date.png';
import { useStyles } from './InputSection.style';
import ImageContainer from '../ImageContainer';
import SurveyContext from '../../../State/context';

const BUTTON_LABEL = 'Submit & continue';
const BUTTON_ACCEPT_CHANGES_LABEL = 'Accept changes';
const IMAGES = [
  { name: 'text', src: inputText, tooltip: 'Text', text: 'Text' },
  { name: 'number', src: inputNumber, tooltip: 'Number', text: 'Number' },
  { name: 'date', src: inputDate, tooltip: 'Date', text: 'Date' }
];
const TITLE = 'Choose input type';

function InputSection() {
  const classes = useStyles();
  const [image, setImage] = useState('');
  const [isChanged, setIsChanged] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleAddInputType, handleSubmitQuestion } = useContext(
    SurveyContext
  );

  const handleClick = e => {
    const img = e.target.alt ? e.target.alt : e.target.children[0].alt;

    setImage(img);

    setIsSubmitted(false);

    handleAddInputType(img);

    if (isSubmitted) setIsChanged(true);
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') handleClick(e);
  };

  const handleSubmit = () => {
    handleSubmitQuestion();

    setIsSubmitted(true);
  };

  return (
    <div className={classes.inputSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <div className={classes.typeWrapper}>
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
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={!image || isSubmitted}
          onClick={handleSubmit}
          size="large"
          variant="contained"
        >
          {isChanged ? BUTTON_ACCEPT_CHANGES_LABEL : BUTTON_LABEL}
        </Button>
      </div>
    </div>
  );
}

export default InputSection;
