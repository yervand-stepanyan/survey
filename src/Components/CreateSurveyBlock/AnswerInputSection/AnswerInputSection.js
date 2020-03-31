import React, { useState } from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import inputText from '../../../assets/images/inputOptions/input-text.png';
import inputNumber from '../../../assets/images/inputOptions/input-number.png';
import inputDate from '../../../assets/images/inputOptions/input-date.png';
import { useStyles } from './AnswerInputSection.style';

const IMAGES = [
  { name: 'text', src: inputText, tooltip: 'Text' },
  { name: 'number', src: inputNumber, tooltip: 'Number' },
  { name: 'date', src: inputDate, tooltip: 'Date' }
];
const TITLE = 'Choose input field type';

function AnswerInputSection() {
  const classes = useStyles();
  const [image, setImage] = useState(null);

  const handleImageClick = e => {
    if (e.target.alt) setImage(e.target.alt);
    else setImage(e.target.children[0].alt);
  };

  const handleEnterKey = e => {
    if (e.key === 'Enter') handleImageClick(e);
  };
  return (
    <div className={classes.container}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <div className={classes.typeWrapper}>
        {IMAGES.map(img => (
          <Tooltip
            title={img.tooltip}
            TransitionComponent={Zoom}
            arrow
            key={img.name}
          >
            <div
              className={
                image === img.name
                  ? classes.imageContainerClicked
                  : classes.imageContainer
              }
              onClick={e => handleImageClick(e)}
              onKeyDown={e => handleEnterKey(e)}
              role="button"
              tabIndex={0}
            >
              <img
                src={img.src}
                alt={img.name}
                className={
                  image === img.name ? classes.imageClicked : classes.image
                }
              />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default AnswerInputSection;
