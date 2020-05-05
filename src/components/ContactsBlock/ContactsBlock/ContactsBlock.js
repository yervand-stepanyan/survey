import React from 'react';
import Card from '@material-ui/core/Card';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import AddressSection from '../AddressSection';
import DevelopersSection from '../DevelopersSection/index';
import MapSection from '../MapSection';
import { TEXT_LABEL } from '../../../globals/constants';
import { useStyles } from './ContactsBlock.style';

function ContactsBlock() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <div className={classes.title}>
          <Typography variant="h4">{TEXT_LABEL.contactsBlockTitle}</Typography>
        </div>
        <Card>
          <div className={classes.contactsAndMapWrapper}>
            <div className={classes.contactsWrapper}>
              <div className={classes.developersTitle}>
                <Typography variant="h5">
                  {TEXT_LABEL.contactsBlockDevelopersSectionTitle}
                </Typography>
              </div>
              <DevelopersSection />
            </div>
            <div className={classes.mapWrapper}>
              <MapSection />
              <div className={classes.addressWrapper}>
                <div>
                  <Typography variant="h5">
                    {TEXT_LABEL.contactsBlockAddressSectionTitle}
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
