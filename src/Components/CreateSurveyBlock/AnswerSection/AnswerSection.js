import React from 'react';

import InputSection from '../InputSection';
import RadiobuttonSection from '../RadiobuttonSection';
import { useStyles } from './AnswerSection.style';

function AnswerSection() {
  const classes = useStyles();

  return (
    <div className={classes.answerSectionContainer}>
      <InputSection />
      <RadiobuttonSection />
    </div>
  );
}

export default AnswerSection;
