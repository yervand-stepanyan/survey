import React from 'react';
import PropTypes from 'prop-types';

import ContactsBlock from '../../Components/ContactsBlock/ContactsBlock';

function Contacts({ classes }) {
  return (
    <div className={classes.container}>
      <ContactsBlock />
    </div>
  );
}

Contacts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Contacts;
