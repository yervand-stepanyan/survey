import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import OptionsContainer from '../OptionsContainer';
import { TEXT_LABELS } from '../../../globals/constants';
import { useStyles } from './RadiobuttonSection.style';

function RadiobuttonSection({ activeId, answers, hasLastInput }) {
  const classes = useStyles();

  return (
    <div className={classes.radiobuttonSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">
          {TEXT_LABELS.radiobuttonSectionTitle}
        </Typography>
      </div>
      <OptionsContainer
        activeId={activeId}
        answers={answers}
        hasLastInput={hasLastInput}
        type="addInput"
      />
    </div>
  );
}

RadiobuttonSection.propTypes = {
  activeId: PropTypes.string.isRequired,
  answers: PropTypes.array,
  hasLastInput: PropTypes.bool
};

RadiobuttonSection.defaultProps = {
  answers: undefined,
  hasLastInput: false
};

export default RadiobuttonSection;
