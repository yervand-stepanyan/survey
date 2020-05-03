import React from 'react';
import Card from '@material-ui/core/Card'

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import AddressSection from '../AddressSection';
import DevelopersSection from '../DevelopersSection/index';

import MapSection from '../MapSection';
import { TEXT_LABELS } from '../../../Globals/variables';
import { useStyles } from './ContactsBlock.style';

function ContactsBlock() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth='md' className={classes.contactsBlockContainer}>
        <div className={classes.title}>
          <Typography variant="h4">{TEXT_LABELS.contactsBlockTitle}</Typography>
        </div>
        <Card>
          <div className={classes.contactsAndMapWrapper}>
            <div className={classes.contactsWrapper}>
              <div>
                <Typography variant="h5">
                  {TEXT_LABELS.contactsBlockDevelopersSectionTitle}
                </Typography>
              </div>
              <DevelopersSection />
            </div>
            <div className={classes.mapWrapper}>
              <MapSection />
              <div className={classes.addressWrapper}>
                <div>
                  <Typography variant="h5">
                    {TEXT_LABELS.contactsBlockAddressSectionTitle}
                  </Typography>
                </div>
                <AddressSection />
              </div>
            </div>
          </div>
        </Card>
      </Container>
    </>
  );
}

export default ContactsBlock;
