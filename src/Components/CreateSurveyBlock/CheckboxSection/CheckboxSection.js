import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import OptionsContainer from '../OptionsContainer';
import { useStyles } from './CheckboxSection.style';

const TITLE = 'Checkbox answer options';

function CheckboxSection({ answers }) {
  const classes = useStyles();

  return (
    <div className={classes.checkboxSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <OptionsContainer answers={answers} />
    </div>
  );
}

CheckboxSection.propTypes = {
  answers: PropTypes.array
};

CheckboxSection.defaultProps = {
  answers: []
};

export default CheckboxSection;
