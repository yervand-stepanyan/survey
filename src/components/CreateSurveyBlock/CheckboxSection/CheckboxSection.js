import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import OptionsContainer from '../OptionsContainer';
import { TEXT_LABEL } from '../../../globals/constants';
import { useStyles } from './CheckboxSection.style';

function CheckboxSection({ activeId, answers }) {
  const classes = useStyles();

  return (
    <div className={classes.checkboxSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TEXT_LABEL.checkboxSectionTitle}</Typography>
      </div>
      <OptionsContainer activeId={activeId} answers={answers} />
    </div>
  );
}

CheckboxSection.propTypes = {
  activeId: PropTypes.string.isRequired,
  answers: PropTypes.array
};

CheckboxSection.defaultProps = {
  answers: undefined
};

export default CheckboxSection;
