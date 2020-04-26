import React, { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';

import { PARTNERS_IMAGES, SLIDER_TIMER } from '../../Globals/variables';
import { useStyles } from './OurPartnersBlock.style';

const TITLE = 'Our Partners';

function OurPartnersBlock() {
  const classes = useStyles();
  const [images, setImages] = useState(
    PARTNERS_IMAGES.slice(0, PARTNERS_IMAGES.length - 1)
  );

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
        <Typography variant="h4">{TITLE}</Typography>
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

export default OurPartnersBlock;
