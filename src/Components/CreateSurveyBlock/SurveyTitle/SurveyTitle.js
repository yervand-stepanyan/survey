import React from 'react';
import PropTypes from 'prop-types';

import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import { TEXT_LABELS } from '../../../Globals/variables';
import { useStyles } from './SurveyTitle.style';

function SurveyTitle({ handleEditTitle, title }) {
  const classes = useStyles();

  const handleEdit = () => {
    handleEditTitle();
  };

  return (
    <div className={classes.surveyTitleContainer}>
      <div className={classes.titleWrapper}>
        <div className={classes.titleLabel}>
          <div className={classes.label}>
            <Typography variant="h5">
              {TEXT_LABELS.surveyTitleSectionSurveyTitleLabel}
            </Typography>
          </div>
          <div className={classes.title}>
            <Typography variant="h6">{title}</Typography>
          </div>
          <div className={classes.editIconWrapper}>
            <Tooltip arrow title="Edit" TransitionComponent={Zoom}>
              <IconButton
                className={classes.editIcon}
                color="primary"
                onClick={handleEdit}
              >
                <CreateIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

SurveyTitle.propTypes = {
  handleEditTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default SurveyTitle;
