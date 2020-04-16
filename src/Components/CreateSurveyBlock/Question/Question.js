import React from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import { useStyles } from './Question.style';

const QUESTION_LABEL = 'Question';

function Question({
  activeId,
  index,
  handleEditQuestion,
  handleRemoveQuestion,
  question
}) {
  const classes = useStyles();
  const label = `${QUESTION_LABEL} ${index + 1}:`;

  const handleEdit = () => {
    handleEditQuestion(activeId);
  };

  const handleRemove = () => {
    handleRemoveQuestion(activeId);
  };

  return (
    <div className={classes.questionContainer}>
      <div className={classes.questionWrapper}>
        <div className={classes.questionLabel}>
          <div className={classes.label}>
            <Typography variant="h5">{label}</Typography>
          </div>
          <div className={classes.question}>
            <Typography variant="h5">{question}</Typography>
          </div>
        </div>
        <div className={classes.icons}>
          <div className={classes.editIcon}>
            <Tooltip title="Edit" TransitionComponent={Zoom} arrow>
              <IconButton color="primary" onClick={handleEdit}>
                <CreateIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className={classes.removeIcon}>
            <Tooltip arrow title="Remove" TransitionComponent={Zoom}>
              <Fab color="secondary" onClick={handleRemove} size="medium">
                <DeleteIcon />
              </Fab>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  activeId: PropTypes.string.isRequired,
  handleEditQuestion: PropTypes.func.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
};

Question.defaultProps = {
  // activeId: ''
};

export default Question;
