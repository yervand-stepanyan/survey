import React from 'react';
import PropTypes from 'prop-types';

import AnswerInputSection from '../AnswerInputSection';

function AnswerSection({ classes }) {
  return (
    <div className={classes.container}>
      <AnswerInputSection />
    </div>
  );
}

AnswerSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AnswerSection;
