import React from 'react';
import PropTypes from 'prop-types';

import ResultsBlock from '../../Components/ResultsBlock';

function Results(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <ResultsBlock />
    </div>
  );
}

Results.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Results;
