import React from "react";
import PropTypes from "prop-types";

function MapBlock ({ classes }) {
  return (
    <div className={classes.container}>
      mapblock
    </div>
  )
}

MapBlock.propTypes = {
  classes: PropTypes.object.isRequired 
}