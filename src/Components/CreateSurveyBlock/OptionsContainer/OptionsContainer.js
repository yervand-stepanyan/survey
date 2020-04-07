import React, { useRef, useState } from 'react';
import uuid from 'react-uuid';

import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

import removeSpaces from '../../../Helpers/removeSpaces';
import { useStyles } from './OptionsContainer.style';

const INPUT_LABEL = 'Option';

function OptionsContainer() {
  const classes = useStyles();
  const inputEl = useRef(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isTyped, setIsTyped] = useState(false);
  const [option, setOption] = useState('');
  const [options, setOptions] = useState([]);
  const [chip, setChip] = useState({});

  const handleChange = event => {
    setOption(event.target.value);

    if (!removeSpaces(event.target.value)) {
      setIsEmpty(true);

      setIsTyped(false);
    } else {
      setIsEmpty(false);

      setIsTyped(true);
    }
  };

  const handleSubmitOnEnter = event => {
    if (event.key === 'Enter') {
      const filteredOption = removeSpaces(option);

      if (filteredOption) {
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

        setIsTyped(false);
      } else setIsEmpty(true);
    }
  };

  const handleClick = chipToEdit => () => {
    if (!isTyped) {
      setOption(chipToEdit.option);

      setChip(chipToEdit);

      setIsEmpty(false);

      inputEl.current.focus();
    }
  };

  const handleDelete = chipToDelete => () => {
    setOptions(() => options.filter(opt => opt.id !== chipToDelete));
  };

  return (
    <div className={classes.optionsContainer}>
      <div className={classes.inputWrapper}>
        <div className={classes.textFieldWrapper}>
          <TextField
            autoFocus
            error={isEmpty}
            id="outlined-basic"
            inputRef={inputEl}
            fullWidth
            label={INPUT_LABEL}
            onChange={e => handleChange(e)}
            onKeyDown={handleSubmitOnEnter}
            value={option}
            variant="outlined"
          />
        </div>
      </div>
      <div className={classes.chipsWrapper}>
        <div className={classes.root}>
          {options.map(opt => (
            <Tooltip
              arrow
              className={classes.tooltip}
              key={opt.id}
              title={opt.option}
              TransitionComponent={Zoom}
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

export default OptionsContainer;
