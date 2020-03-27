import React from 'react';
import PropTypes from 'prop-types';

import ContactsBlock from '../../Components/ContactsBlock';
import MapBlock from '../../Components/MapBlock';

function Contacts({ classes }) {
  return (
    <div className={classes.container}>
      <ContactsBlock />
      <MapBlock />
    </div>
  );
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Contacts;
