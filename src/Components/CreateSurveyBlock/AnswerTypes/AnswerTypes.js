import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import AnswerOptions from '../AnswerOptions';

const TITLE = 'Answer type';

function AnswerTypes({ classes }) {
  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <AnswerOptions />
    </div>
  );
}

AnswerTypes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AnswerTypes;
