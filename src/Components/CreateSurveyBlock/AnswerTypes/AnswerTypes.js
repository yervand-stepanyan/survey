import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

const TITLE = 'Answer type';

function AnswerTypes({ classes }) {
  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <div className={classes.titleLabel}>
          <Typography variant="h5">{TITLE}</Typography>
        </div>
      </div>
    </div>
  );
}

AnswerTypes.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AnswerTypes;
