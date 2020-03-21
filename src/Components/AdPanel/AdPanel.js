import React from 'react';
import PropTypes from 'prop-types';

function AdPanel(props) {
  const { classes } = props;

  return <div className={classes.container}>AdPanel works!!!</div>;
}

AdPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default AdPanel;
