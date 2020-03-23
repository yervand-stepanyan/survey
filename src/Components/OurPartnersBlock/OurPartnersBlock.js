import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import betconstruct from '../../assets/images/partners/betconstruct.png';
import helix from '../../assets/images/partners/helix.png';
import picsart from '../../assets/images/partners/picsart.png';
import sfl from '../../assets/images/partners/sfl.png';
import teamable from '../../assets/images/partners/teamable.png';
import workfront from '../../assets/images/partners/workfront_new.png';

const PARTNER_IMAGES = [betconstruct, helix, picsart, sfl, teamable, workfront];

function OurPartnersBlock(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <Typography variant="h6">Our Partners</Typography>
      </div>
      <div>
        <div className={classes.sliderWrapper}>
          {PARTNER_IMAGES.map(image => (
            <div key={image}>
              <img src={image} alt={image} className={classes.partnerImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

OurPartnersBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default OurPartnersBlock;
