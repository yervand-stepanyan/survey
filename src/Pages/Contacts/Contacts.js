import React from 'react';

import ContactsBlock from '../../Components/ContactsBlock/ContactsBlock';
import { useStyles } from './Contacts.style';

function Contacts() {
  const classes = useStyles();

  return (
    <div className={classes.contactsContainer}>
      <ContactsBlock />
    </div>
  );
}

export default Contacts;
