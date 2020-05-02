import React from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import { TEXT_LABELS } from '../../../Globals/variables';
import { useStyles } from './Question.style';

function Question({
  activeId,
  handleEditQuestion,
  handleRemoveQuestion,
  index,
  question
}) {
  const classes = useStyles();
  const label = `${TEXT_LABELS.questionSectionQuestionLabel} ${index + 1}:`;

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
            <Typography variant="h6">{question}</Typography>
          </div>
        </div>
        <div className={classes.icons}>
          <div>
            <Tooltip arrow title="Edit" TransitionComponent={Zoom}>
              <IconButton
                className={classes.icon}
                color="primary"
                onClick={handleEdit}
              >
                <CreateIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div>
            <Tooltip arrow title="Remove" TransitionComponent={Zoom}>
              <IconButton
                className={`${classes.removeIcon} ${classes.icon}`}
                onClick={handleRemove}
              >
                <DeleteIcon />
              </IconButton>
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

export default Question;
