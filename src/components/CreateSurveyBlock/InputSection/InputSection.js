import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import ImageContainer from '../ImageContainer';
import {
  ANSWER_SECTION_BUTTON_ACCEPT_CHANGES_LABEL,
  ANSWER_SECTION_BUTTON_LABEL,
  INPUT_OPTION_TYPES,
  TEXT_LABEL
} from '../../../globals/constants';
import { useStore } from '../../../state/use-store';
import { useStyles } from './InputSection.style';

function InputSection({ activeId, inputType: inputTypeProps }) {
  const classes = useStyles();
  const [inputType, setInputType] = useState(inputTypeProps || '');
  const [isChanged, setIsChanged] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(!!inputTypeProps || false);
  const { disableSave, handleAddInputType, handleSubmitQuestion } = useStore();

  const handleCardClick = (e, type) => {
    if (inputType !== type) {
      setInputType(type);

      setIsSubmitted(false);

      handleAddInputType(activeId, type);

      disableSave(true);

      if (isSubmitted) {
        setIsChanged(true);
      }
    }
  };

  const handleCardEnterKey = (e, type) => {
    if (e.key === 'Enter') {
      handleCardClick(type);
    }
  };

  const handleSubmit = () => {
    handleSubmitQuestion(activeId);

    setIsSubmitted(true);
  };

  return (
    <div className={classes.inputSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TEXT_LABEL.inputSectionTitle}</Typography>
      </div>
      <div className={classes.typeWrapper}>
        {INPUT_OPTION_TYPES.map(type => (
          <ImageContainer
            classes={classes}
            handleCardClick={handleCardClick}
            handleCardEnterKey={handleCardEnterKey}
            imageClicked={inputType}
            type={type}
            key={type.name}
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
