import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ANSWER_OPTION_TYPES } from '../../../Globals/variables';
import ImageContainer from '../ImageContainer';
import { useStore } from '../../../State/use-store';
import { useStyles } from './AnswerOptions.style';

function AnswerOptions({ activeId, answerType: answerTypeProps, setType }) {
  const classes = useStyles();
  const [answerType, setAnswerType] = useState(answerTypeProps || '');
  const { disableSave, handleAddAnswerType } = useStore();

  const handleImageClick = e => {
    const type = e.target.alt ? e.target.alt : e.target.children[0].alt;

    setAnswerType(type);

    setType(type);

    handleAddAnswerType(activeId, type);

    disableSave(true);
  };

  const handleTextClick = type => {
    setAnswerType(type);

    setType(type);

    handleAddAnswerType(activeId, type);

    disableSave(true);
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') {
      handleImageClick(e);
    }
  };

  const handleTextEnterKey = (e, type) => {
    if (e.key === 'Enter') {
      handleTextClick(type);
    }
  };

  return (
    <div className={classes.answerOptionsContainer}>
      {ANSWER_OPTION_TYPES.map(type => (
        <ImageContainer
          classes={classes}
          handleEnterKey={handleEnterKey}
          handleImageClick={handleImageClick}
          handleTextClick={handleTextClick}
          handleTextEnterKey={handleTextEnterKey}
          imageClicked={answerType}
          type={type}
          key={type.name}
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
