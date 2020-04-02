import React from 'react';

import Typography from '@material-ui/core/Typography';

import AnswerOptions from '../AnswerOptions';
import AnswerSection from '../AnswerSection';
import { useStyles } from './AnswerTypes.style';

const TITLE = 'Answer type';

function AnswerTypes() {
  const classes = useStyles();

  return (
    <div className={classes.answerTypesContainer}>
      <div className={classes.answerTypesTitleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <AnswerOptions />
      <AnswerSection />
    </div>
  );
}

export default AnswerTypes;
