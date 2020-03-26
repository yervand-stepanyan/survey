import React from "react";
import PropTypes from "prop-types";

import MapBlock from "../../Components/MapBlock"

function Contacts ({ classes }) {
  return (
    <div className={classes.container}>
      Contacts
      <MapBlock />
    </div>
  )
}
Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Contacts;
