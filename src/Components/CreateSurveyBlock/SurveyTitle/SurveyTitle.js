import React from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import { useStyles } from './SurveyTitle.style';

const TITLE_LABEL = 'Survey title:';

function SurveyTitle({ title, setIsTitle }) {
  const classes = useStyles();

  const handleEdit = () => {
    setIsTitle(false);
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
  title: PropTypes.string.isRequired,
  setIsTitle: PropTypes.func.isRequired
};

export default SurveyTitle;
