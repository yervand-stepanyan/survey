import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import { useStyles } from './AddNewQuestion.style';

const TEXT_LABEL = 'Add question';
const TABINDEX = 0;

function AddNewQuestion() {
  const classes = useStyles();
  const enabled = false;

  const handleClick = () => {};

  const handleEnterKey = () => {};

  return (
    <div className={classes.addNewQuestionContainer}>
      <div className={classes.buttonWrapper}>
        <Fab
          color="primary"
          disabled={enabled}
          onClick={handleClick}
          size="medium"
        >
          <AddIcon fontSize="large" />
        </Fab>
      </div>
      <div
        className={enabled ? classes.textWrapperDisabled : classes.textWrapper}
        onClick={e => handleClick(e)}
        onKeyDown={e => handleEnterKey(e)}
        role="button"
        tabIndex={TABINDEX}
      >
        <Typography variant="h5">{TEXT_LABEL}</Typography>
      </div>
    </div>
  );
}

export default AddNewQuestion;
