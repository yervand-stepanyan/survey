import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import SurveyContext from '../../../State/context';
import { useStyles } from './Question.style';

const QUESTION_LABEL = 'Question';

function Question({ activeId, onEdit, onRemove, question }) {
  const classes = useStyles();
  const { stateQuestions } = useContext(SurveyContext);
  const label = `${QUESTION_LABEL} ${stateQuestions.length}:`;

  const handleEdit = () => onEdit(activeId);

  const handleRemove = () => onRemove(activeId);

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
              <IconButton onClick={handleEdit} color="primary">
                <CreateIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className={classes.removeIcon}>
            <Tooltip title="Remove" TransitionComponent={Zoom} arrow>
              <Fab onClick={handleRemove} color="secondary" size="medium">
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
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired
};

export default Question;
