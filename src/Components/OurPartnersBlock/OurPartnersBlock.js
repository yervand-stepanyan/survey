import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import betconstruct from '../../assets/images/partners/betconstruct.png';
import helix from '../../assets/images/partners/helix.png';
import picsart from '../../assets/images/partners/picsart.png';
import sfl from '../../assets/images/partners/sfl.png';
import teamable from '../../assets/images/partners/teamable.png';
import workfront from '../../assets/images/partners/workfront_new.png';

const PARTNERS_IMAGES = [
  betconstruct,
  helix,
  picsart,
  sfl,
  teamable,
  workfront
];
const SLIDER_TIMER = 4000;
const TITLE = 'Our Partners';

function OurPartnersBlock(props) {
  const [images, setImages] = useState(
    PARTNERS_IMAGES.slice(0, PARTNERS_IMAGES.length - 1)
  );
  const { classes } = props;

  useEffect(() => {
    let count = 1;

    const slider = setInterval(() => {
      if (PARTNERS_IMAGES.length - count > PARTNERS_IMAGES.length - 1) {
        setImages(
          PARTNERS_IMAGES.slice(count, PARTNERS_IMAGES.length - 1 + count)
        );
      } else if (
        PARTNERS_IMAGES.length - count ===
        PARTNERS_IMAGES.length - 1
      ) {
        setImages(PARTNERS_IMAGES.slice(count));
      } else {
        setImages(
          PARTNERS_IMAGES.slice(count).concat(
            PARTNERS_IMAGES.slice(0, count - 1)
          )
        );
      }

      if (count < PARTNERS_IMAGES.length - 1) {
        count += 1;
      } else {
        count = 0;
      }
    }, SLIDER_TIMER);

    return () => {
      clearInterval(slider);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <Typography variant="h6">{TITLE}</Typography>
      </div>
      <div className={classes.sliderContainer}>
        <div className={classes.sliderWrapper}>
          {images.map(image => (
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
