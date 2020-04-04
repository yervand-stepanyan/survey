import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';

import AnswerOptions from '../AnswerOptions';
import AnswerSection from '../AnswerSection';
import { useStyles } from './AnswerTypes.style';

const TITLE = 'Answer type';

function AnswerTypes() {
  const classes = useStyles();
  const [type, setType] = useState('');

  return (
    <div className={classes.answerTypesContainer}>
      <div className={classes.answerTypesTitleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <AnswerOptions setType={setType} />
      <AnswerSection type={type} />
    </div>
  );
}

export default AnswerTypes;
