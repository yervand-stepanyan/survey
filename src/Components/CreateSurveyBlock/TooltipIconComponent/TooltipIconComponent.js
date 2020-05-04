import React from 'react';
import PropTypes from 'prop-types';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import { useStyles } from './TooltipIconComponent.style';

function TooltipIconComponent({
  checkOrInfoCondition,
  errorCondition,
  errorMessageTitle,
  handleShowErrorTooltip,
  handleShowHelpTooltip,
  helpMessageTitle,
  openErrorTooltip,
  openHelpTooltip
}) {
  const classes = useStyles();

  return (
    <>
      {errorCondition ? (
        <div className={classes.iconWrapper}>
          <Tooltip
            arrow
            classes={{
              arrow: classes.errorIconArrow,
              tooltip: classes.errorIconTooltip
            }}
            open={openErrorTooltip}
            title={errorMessageTitle}
            TransitionComponent={Zoom}
          >
            <IconButton
              className={classes.errorIcon}
              onClick={handleShowErrorTooltip}
            >
              <ErrorIcon />
            </IconButton>
          </Tooltip>
        </div>
      ) : (
        <div
          className={
            checkOrInfoCondition
              ? classes.checkIconWrapper
              : classes.iconWrapper
          }
        >
          {checkOrInfoCondition ? (
            <CheckCircleIcon className={classes.checkIcon} />
          ) : (
            <Tooltip
              arrow
              classes={{
                arrow: classes.infoIconArrow,
                tooltip: classes.infoIconTooltip
              }}
              open={openHelpTooltip}
              title={helpMessageTitle}
              TransitionComponent={Zoom}
            >
              <IconButton
                className={classes.infoIcon}
                onClick={handleShowHelpTooltip}
              >
                <InfoIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      )}
    </>
  );
}

TooltipIconComponent.propTypes = {
  checkOrInfoCondition: PropTypes.bool.isRequired,
  errorCondition: PropTypes.bool.isRequired,
  errorMessageTitle: PropTypes.string.isRequired,
  handleShowErrorTooltip: PropTypes.func.isRequired,
  handleShowHelpTooltip: PropTypes.func.isRequired,
  helpMessageTitle: PropTypes.string.isRequired,
  openErrorTooltip: PropTypes.bool.isRequired,
  openHelpTooltip: PropTypes.bool.isRequired
};

export default TooltipIconComponent;
