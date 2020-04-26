import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ANSWER_OPTION_TYPES } from '../../../Globals/variables';
import ImageContainer from '../ImageContainer';
import SurveyContext from '../../../State/context';
import { useStyles } from './AnswerOptions.style';

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
      {ANSWER_OPTION_TYPES.map(img => (
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
