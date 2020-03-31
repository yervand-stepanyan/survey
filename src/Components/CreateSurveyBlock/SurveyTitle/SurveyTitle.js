import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import SurveyContext from '../../../State/context';

const TITLE_LABEL = 'Survey title:';

function SurveyTitle({ classes }) {
  const { state, dispatch } = useContext(SurveyContext);
  const { surveyDispatch } = useContext(SurveyContext);
  const { title } = state;

  const handleEdit = () => {
    dispatch({ type: 'EDIT_TITLE', payload: title });
    surveyDispatch({ type: 'ADD_TITLE', payload: title });
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <div className={classes.titleLabel}>
          <div className={classes.label}>
            <Typography variant="h5">{TITLE_LABEL}</Typography>
          </div>
          <div className={classes.title}>
            <Typography variant="h5">{title}</Typography>
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

SurveyTitle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SurveyTitle;
