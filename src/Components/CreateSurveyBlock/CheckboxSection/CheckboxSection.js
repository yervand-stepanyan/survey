import React from 'react';

import Typography from '@material-ui/core/Typography';

import OptionsContainer from '../OptionsContainer';
import { useStyles } from './CheckboxSection.style';

const TITLE = 'Checkbox answer options';

function CheckboxSection() {
  const classes = useStyles();

  return (
    <div className={classes.checkboxSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <OptionsContainer />
    </div>
  );
}

export default CheckboxSection;
