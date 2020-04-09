import React from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import { useStyles } from './Question.style';

const QUESTION_LABEL = 'Question:';

function Question({ question, activeId, onEdit }) {
  const classes = useStyles();

  const handleEdit = () => onEdit(activeId);

  return (
    <div className={classes.container}>
      <div className={classes.questionWrapper}>
        <div className={classes.questionLabel}>
          <div className={classes.label}>
            <Typography variant="h5">{QUESTION_LABEL}</Typography>
          </div>
          <div className={classes.question}>
            <Typography variant="h5">{question}</Typography>
          </div>
        </div>
        <div className={classes.editIcon}>
          <Tooltip title="Edit" TransitionComponent={Zoom} arrow>
            <IconButton onClick={handleEdit}>
              <CreateIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  activeId: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired
};

export default Question;
