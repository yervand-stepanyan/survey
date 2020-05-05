import React from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import { TABINDEX, TEXT_LABELS } from '../../../globals/constants';
import { useStyles } from './AddNewQuestion.style';

function AddNewQuestion({ handleAddNewQuestion }) {
  const classes = useStyles();

  const handleClick = () => {
    handleAddNewQuestion();
  };

  const handleEnterKey = () => {
    handleClick();
  };

  return (
    <div className={classes.addNewQuestionContainer}>
      <div className={classes.buttonWrapper}>
        <Fab color="primary" onClick={handleClick} size="medium">
          <AddIcon fontSize="large" />
        </Fab>
      </div>
      <div
        className={classes.textWrapper}
        onClick={e => handleClick(e)}
        onKeyDown={e => handleEnterKey(e)}
        role="button"
        tabIndex={TABINDEX}
      >
        <Typography variant="h5">{TEXT_LABELS.addNewQuestionLabel}</Typography>
      </div>
    </div>
  );
}

AddNewQuestion.propTypes = {
  handleAddNewQuestion: PropTypes.func.isRequired
};

export default AddNewQuestion;
