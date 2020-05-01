import React from 'react';

import Typography from '@material-ui/core/Typography';

import AddressSection from '../AddressSection';
import DevelopersSection from '../DevelopersSection/index';
import MapSection from '../MapSection';
import { TEXT_LABELS } from '../../../Globals/variables';
import { useStyles } from './ContactsBlock.style';

function ContactsBlock() {
  const classes = useStyles();

  return (
    <div className={classes.contactsBlockContainer}>
      <div className={classes.title}>
        <Typography variant="h4">{TEXT_LABELS.contactsBlockTitle}</Typography>
      </div>
      <div className={classes.contactsAndMapWrapper}>
        <div className={classes.contactsWrapper}>
          <div>
            <Typography variant="h5">
              {TEXT_LABELS.contactsBlockDevelopersSectionTitle}
            </Typography>
          </div>
          <DevelopersSection />
          <div className={classes.addressWrapper}>
            <div>
              <Typography variant="h5">
                {TEXT_LABELS.contactsBlockAddressSectionTitle}
              </Typography>
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
