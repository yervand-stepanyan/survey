import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import SurveyContext from '../../../State/context';

const TITLE_LABEL = 'Survey title:';

function SurveyTitle({ classes }) {
  const { state, dispatch } = useContext(SurveyContext);
  const { title } = state;

  const handleEdit = () => {
    dispatch({ type: 'EDIT_TITLE', payload: title });
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <div className={classes.titleLabel}>
          <Typography variant="h5">{TITLE_LABEL}</Typography>
          <Typography variant="h5" className={classes.title}>
            {title}
          </Typography>
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

SurveyTitle.propTypes = {
  classes: PropTypes.object.isRequired
};

export default SurveyTitle;
