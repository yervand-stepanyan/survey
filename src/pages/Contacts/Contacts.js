import React from 'react';

import ContactsBlock from '../../components/ContactsBlock/ContactsBlock';
import Loader from '../../components/Loader';
import { LOADER_TYPE } from '../../globals/constants';
import { useStore } from '../../state/use-store';
import { useStyles } from './Contacts.style';

function Contacts() {
  const classes = useStyles();
  const { loadingData } = useStore();

  return (
    <div className={classes.contactsContainer}>
      {loadingData ? <Loader type={LOADER_TYPE.page} /> : <ContactsBlock />}
    </div>
  );
}

export default Contacts;
