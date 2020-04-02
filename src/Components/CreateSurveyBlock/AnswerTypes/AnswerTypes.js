import React, { useReducer } from 'react';

import Typography from '@material-ui/core/Typography';

import { answerTypeReducer } from '../../../State/reducer';
import AnswerOptions from '../AnswerOptions';
import AnswerSection from '../AnswerSection';
import SurveyContext from '../../../State/context';
import { useStyles } from './AnswerTypes.style';

const TITLE = 'Answer type';

function AnswerTypes() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(answerTypeReducer, '');

  return (
    <div className={classes.answerTypesContainer}>
      <div className={classes.answerTypesTitleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <SurveyContext.Provider value={{ state, dispatch }}>
        <AnswerOptions />
        <AnswerSection />
      </SurveyContext.Provider>
    </div>
  );
}

export default AnswerTypes;
