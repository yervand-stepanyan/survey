import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SurveyContext from '../../../State/context';

function SurveyTitle({ classes }) {
  const { state, dispatch } = useContext(SurveyContext);
  const { title } = state;

  const handleIsEdit = () => {
    dispatch({ type: 'EDIT_TITLE', payload: title });
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <div className={classes.titleLabel}>
          <Typography variant="h5">{title}</Typography>
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

SurveyTitle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SurveyTitle;
