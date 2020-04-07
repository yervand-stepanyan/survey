import React from 'react';

import Typography from '@material-ui/core/Typography';

import OptionsContainer from '../OptionsContainer';
import { useStyles } from './RadiobuttonSection.style';

const TITLE = 'Radiobutton answer options';

function RadiobuttonSection() {
  const classes = useStyles();

  return (
    <div className={classes.radiobuttonSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <OptionsContainer type="addInput" />
    </div>
  );
}

export default RadiobuttonSection;
