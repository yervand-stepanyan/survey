import React from 'react';

import ContactsBlock from '../../components/ContactsBlock/ContactsBlock';
import PageLoader from '../../components/Loaders/PageLoader';
import { useStore } from '../../state/use-store';
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
