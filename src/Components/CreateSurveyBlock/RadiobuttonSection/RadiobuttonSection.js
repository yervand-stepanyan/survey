import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';

import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';

import removeSpaces from '../../../Helpers/removeSpaces';
import { useStyles } from './RadiobuttonSection.style';

const INPUT_LABEL = 'Option';
const TITLE = 'Options';

function RadiobuttonSection() {
  const classes = useStyles();
  const inputEl = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [option, setOption] = useState('');
  const [options, setOptions] = useState([]);
  const [chip, setChip] = useState({});

  const handleChange = event => {
    setOption(event.target.value);

    if (removeSpaces(event.target.value)) setIsEmpty(true);
    else setIsEmpty(false);
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      const filteredOption = removeSpaces(option);

      if (filteredOption) {
        // setOptions([...options, { id: uuid(), option }]);

        setOptions(
          chip.id
            ? options.map(opt =>
                opt.id === chip.id
                  ? { id: chip.id, option: filteredOption }
                  : opt
              )
            : [...options, { id: uuid(), option: filteredOption }]
        );

        setOption('');

        setChip({});
      } else setIsEmpty(false);
    }
  };

  const handleClick = chipToEdit => () => {
    if (!option) {
      setOption(chipToEdit.option);

      setChip(chipToEdit);

      setIsEmpty(true);

      inputEl.current.focus();
    }
  };

  const handleDelete = chipToDelete => () => {
    setOptions(() => options.filter(opt => opt.id !== chipToDelete));
  };

  return (
    <div className={classes.radiobuttonSectionContainer}>
      <div className={classes.titleWrapper}>
        <Typography variant="h5">{TITLE}</Typography>
      </div>
      <div className={classes.inputWrapper}>
        <div className={classes.textFieldWrapper}>
          <TextField
            autoFocus
            error={!isEmpty}
            id="outlined-basic"
            inputRef={inputEl}
            label={INPUT_LABEL}
            onChange={e => handleChange(e)}
            onKeyDown={handleSubmitOnEnter}
            value={option}
            variant="outlined"
            fullWidth
          />
        </div>
      </div>
      <div className={classes.chipsWrapper}>
        <div className={classes.root}>
          {options.map(opt => (
            <Tooltip
              title={opt.option}
              TransitionComponent={Zoom}
              arrow
              key={opt.id}
            >
              <Chip
                className={classes.chip}
                clickable
                color="primary"
                label={opt.option}
                onClick={handleClick(opt)}
                onDelete={handleDelete(opt.id)}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RadiobuttonSection;
