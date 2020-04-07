import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import removeSpaces from '../../../Helpers/removeSpaces';
import { useStyles } from './RangeSection.style';

const BUTTON_LABEL = 'Submit';
const END_VALUE_LABEL = 'End value';
const START_VALUE_LABEL = 'Start value';
const TITLE = 'Range values';

function RangeSection() {
  const classes = useStyles();
  const [startVal, setStartVal] = useState('');
  const [endVal, setEndVal] = useState('');
  const [isStartEmpty, setIsStartEmpty] = useState(false);
  const [isEndEmpty, setIsEndEmpty] = useState(false);
  const [isEqual, setIsEqual] = useState(false);

  // console.log({ isEqual });
  // console.log({ startVal });
  // console.log({ endVal });
  // console.log(startVal === endVal);

  const handleStartChange = event => {
    setStartVal(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsStartEmpty(true);
    } else {
      setIsStartEmpty(false);

      setIsEqual(startVal === endVal);
      // console.log(startVal === endVal);
    }
  };

  const handleEndChange = event => {
    setEndVal(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsEndEmpty(true);
    } else {
      setIsEndEmpty(false);

      setIsEqual(startVal === endVal);
      // console.log(startVal === endVal);
    }
  };

  const handleSubmit = () => {};

  return (
    <div className={classes.rangeSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <div className={classes.inputWrapper}>
        <div className={classes.textFieldsSection}>
          <div className={classes.textFieldWrapper}>
            <TextField
              autoFocus
              error={isStartEmpty}
              id="outlined-basic"
              fullWidth
              label={START_VALUE_LABEL}
              onChange={e => handleStartChange(e)}
              // onKeyDown={handleSubmitOnEnter}
              type="number"
              value={startVal}
              variant="outlined"
            />
          </div>
          <div className={classes.textFieldWrapper}>
            <TextField
              error={isEndEmpty}
              id="outlined-basic"
              fullWidth
              label={END_VALUE_LABEL}
              onChange={e => handleEndChange(e)}
              // onKeyDown={handleSubmitOnEnter}
              type="number"
              value={endVal}
              variant="outlined"
            />
          </div>
        </div>
        <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            disabled={isEqual || !startVal || !endVal}
            onClick={handleSubmit}
            size="large"
            variant="contained"
          >
            {BUTTON_LABEL}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default RangeSection;
