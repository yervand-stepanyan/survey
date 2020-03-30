import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SurveyContext from '../../../State/context';

function Question({ classes }) {
  const { state, dispatch } = useContext(SurveyContext);
  const { question } = state;

  const handleIsEdit = () => {
    dispatch({ type: 'EDIT_QUESTION', payload: question });
  };

  return (
    <div className={classes.container}>
      <div className={classes.questionWrapper}>
        <div className={classes.questionLabel}>
          <Typography variant="h5">{question}</Typography>
        </div>
        <div className={classes.editIcon}>
          <IconButton onClick={handleIsEdit}>
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
