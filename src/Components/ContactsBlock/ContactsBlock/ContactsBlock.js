import React from 'react';

import Typography from '@material-ui/core/Typography';

import AddressSection from '../AddressSection';
import DevelopersSection from '../DevelopersSection/index';
import MapSection from '../MapSection';
import { useStyles } from './ContactsBlock.style';

const ADDRESS_SECTION_TITLE = 'Address';
const DEVELOPERS_SECTION_TITLE = 'Our developers';
const TITLE = 'Contacts';

function ContactsBlock() {
  const classes = useStyles();

  return (
    <div className={classes.contactsBlockContainer}>
      <div className={classes.title}>
        <Typography variant="h4">{TITLE}</Typography>
      </div>
      <div className={classes.contactsAndMapWrapper}>
        <div className={classes.contactsWrapper}>
          <div>
            <Typography variant="h5">{DEVELOPERS_SECTION_TITLE}</Typography>
          </div>
          <DevelopersSection />
          <div className={classes.addressWrapper}>
            <div>
              <Typography variant="h5">{ADDRESS_SECTION_TITLE}</Typography>
            </div>
            <AddressSection />
          </div>
        </div>
        <div className={classes.mapWrapper}>
          <MapSection />
        </div>
      </div>
    </div>
  );
}

export default ContactsBlock;
