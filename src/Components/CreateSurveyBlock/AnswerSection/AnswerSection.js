import React, { useContext } from 'react';

import InputSection from '../InputSection';
import RadiobuttonSection from '../RadiobuttonSection';
import SurveyContext from '../../../State/context';
import { useStyles } from './AnswerSection.style';

function AnswerSection() {
  const classes = useStyles();
  const { state } = useContext(SurveyContext);
  const { type } = state;

  const showType = typeToShow => {
    switch (typeToShow) {
      case 'input':
        return <InputSection />;
      case 'radiobutton':
        return <RadiobuttonSection />;
      default:
        return null;
    }
  };

  return <div className={classes.answerSectionContainer}>{showType(type)}</div>;
}

export default AnswerSection;
