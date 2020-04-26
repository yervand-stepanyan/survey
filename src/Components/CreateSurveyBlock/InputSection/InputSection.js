import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ImageContainer from '../ImageContainer';
import {
  ANSWER_SECTION_BUTTON_ACCEPT_CHANGES_LABEL,
  ANSWER_SECTION_BUTTON_LABEL,
  INPUT_TYPES
} from '../../../Globals/variables';
import SurveyContext from '../../../State/context';
import { useStyles } from './InputSection.style';

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
    handleSubmitQuestion(activeId);

    setIsSubmitted(true);
  };

  return (
    <div className={classes.inputSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <div className={classes.typeWrapper}>
        {INPUT_TYPES.map(img => (
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
          {isChanged
            ? ANSWER_SECTION_BUTTON_ACCEPT_CHANGES_LABEL
            : ANSWER_SECTION_BUTTON_LABEL}
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
