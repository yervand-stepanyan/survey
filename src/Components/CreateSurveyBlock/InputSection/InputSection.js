import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import inputDate from '../../../assets/images/inputOptions/input-date.png';
import inputNumber from '../../../assets/images/inputOptions/input-number.png';
import inputText from '../../../assets/images/inputOptions/input-text.png';
import ImageContainer from '../ImageContainer';
import SurveyContext from '../../../State/context';
import { useStyles } from './InputSection.style';

const BUTTON_ACCEPT_CHANGES_LABEL = 'Accept changes';
const BUTTON_LABEL = 'Submit & continue';
const TYPES = [
  { name: 'TEXT', src: inputText, tooltip: 'Text', text: 'Text' },
  { name: 'NUMBER', src: inputNumber, tooltip: 'Number', text: 'Number' },
  { name: 'DATE', src: inputDate, tooltip: 'Date', text: 'Date' }
];
const TITLE = 'Choose input type';

function InputSection({ activeId, inputType: inputTypeProps }) {
  const classes = useStyles();
  const [inputType, setInputType] = useState(inputTypeProps || '');
  const [isChanged, setIsChanged] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(!!inputTypeProps || false);
  const { disableSave, handleAddInputType, handleSubmitQuestion } = useContext(
    SurveyContext
  );

  const handleClick = e => {
    const type = e.target.alt ? e.target.alt : e.target.children[0].alt;

    setInputType(type);

    setIsSubmitted(false);

    handleAddInputType(activeId, type);

    disableSave(true);

    if (isSubmitted) {
      setIsChanged(true);
    }
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      handleClick(e);
    }
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
        {TYPES.map(img => (
          <ImageContainer
            classes={classes}
            handleClick={handleClick}
            handleEnterKey={handleEnterKey}
            imageClicked={inputType}
            img={img}
            key={img.name}
          />
        ))}
      </div>
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={!inputType || isSubmitted}
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

InputSection.propTypes = {
  activeId: PropTypes.string.isRequired,
  inputType: PropTypes.string
};

InputSection.defaultProps = {
  inputType: ''
};

export default InputSection;
