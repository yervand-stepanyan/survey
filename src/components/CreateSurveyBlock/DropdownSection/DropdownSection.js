import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import OptionsContainer from '../OptionsContainer';
import { TEXT_LABEL } from '../../../globals/constants';
import { useStyles } from './DropdownSection.style';

function DropdownSection({ activeId, answers }) {
  const classes = useStyles();

  return (
    <div className={classes.dropdownSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TEXT_LABEL.dropdownSectionTitle}</Typography>
      </div>
      <OptionsContainer activeId={activeId} answers={answers} />
    </div>
  );
}

DropdownSection.propTypes = {
  activeId: PropTypes.string.isRequired,
  answers: PropTypes.array
};

DropdownSection.defaultProps = {
  answers: undefined
};

export default DropdownSection;
