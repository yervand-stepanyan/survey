import React from "react";
import PropTypes from "prop-types";

import ContactsBlock from "../../Components/ContactsBlock/ContactsBlock";
import MapBlock from "../../Components/MapBlock"

function Contacts ({ classes }) {
  return (
    <div className={classes.container}>
      <div>
        <ContactsBlock />
      </div>
      <div>
        <MapBlock />
      </div>
    </div>
  )
}
Contacts.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default Contacts;
