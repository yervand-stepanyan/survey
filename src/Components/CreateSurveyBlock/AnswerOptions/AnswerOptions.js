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

  const handleCardClick = (e, type) => {
    setAnswerType(type);

    setType(type);

    handleAddAnswerType(activeId, type);

    disableSave(true);
  };

  const handleCardEnterKey = (e, type) => {
    if (e.key === 'Enter') {
      handleCardClick(type);
    }
  };

  return (
    <div className={classes.answerOptionsContainer}>
      {ANSWER_OPTION_TYPES.map(type => (
        <ImageContainer
          classes={classes}
          handleCardClick={handleCardClick}
          handleCardEnterKey={handleCardEnterKey}
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
