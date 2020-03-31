import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SurveyContext from '../../../State/context';

const QUESTION_LABEL = 'Question:';

function Question({ classes }) {
  const { state, dispatch } = useContext(SurveyContext);
  const { question } = state;

  const handleEdit = () => {
    dispatch({ type: 'EDIT_QUESTION', payload: question });
  };

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
          <IconButton onClick={handleEdit}>
            <CreateIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

Question.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Question;
