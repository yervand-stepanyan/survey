import React from "react";
import PropTypes from "prop-types";

function Contacts ({ classes }) {
  return (
    <div className={classes.container}>
      Contacts
    </div>
  )
}
Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Contacts;
