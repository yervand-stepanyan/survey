import React from 'react';

import Typography from '@material-ui/core/Typography';

import OptionsContainer from '../OptionsContainer';
import { useStyles } from './DropdownSection.style';

const TITLE = 'List options';

function DropdownSection() {
  const classes = useStyles();

  return (
    <div className={classes.dropdownSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <OptionsContainer />
    </div>
  );
}

export default DropdownSection;
