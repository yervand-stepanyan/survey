import React from 'react';

import ContactsBlock from '../../Components/ContactsBlock/ContactsBlock';
import PageLoader from '../../Components/Loaders/PageLoader';
import { useStore } from '../../State/use-store';
import { useStyles } from './Contacts.style';

function Contacts() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <div className={classes.contactsContainer}>
      {loadingData ? <PageLoader /> : <ContactsBlock />}
    </div>
  );
}

export default Contacts;
