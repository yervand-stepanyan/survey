import React from 'react';
import PropTypes from 'prop-types';

import CheckboxSection from '../CheckboxSection';
import DropdownSection from '../DropdownSection';
import InputSection from '../InputSection';
import RadiobuttonSection from '../RadiobuttonSection';
import RangeSection from '../RangeSection';
import { useStyles } from './AnswerSection.style';

const TYPES = {
  checkbox: 'CHECKBOX',
  dropdown: 'DROPDOWN',
  input: 'INPUT',
  radiobutton: 'RADIOBUTTON',
  range: 'RANGE'
};

function AnswerSection({
  activeId,
  answers,
  answerType,
  endValue,
  hasLastInput,
  inputType,
  startValue,
  stepValue,
  type
}) {
  const classes = useStyles();

  const showType = typeToShow => {
    switch (typeToShow) {
      case TYPES.input:
        return <InputSection activeId={activeId} inputType={inputType} />;
      case TYPES.radiobutton:
        return (
          <RadiobuttonSection
            activeId={activeId}
            answers={answers}
            hasLastInput={hasLastInput}
          />
        );
      case TYPES.checkbox:
        return <CheckboxSection activeId={activeId} answers={answers} />;
      case TYPES.dropdown:
        return <DropdownSection activeId={activeId} answers={answers} />;
      case TYPES.range:
        return (
          <RangeSection
            activeId={activeId}
            endValue={endValue}
            startValue={startValue}
            stepValue={stepValue}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={classes.answerSectionContainer}>
      {showType(type || answerType)}
    </div>
  );
}

AnswerSection.propTypes = {
  activeId: PropTypes.string.isRequired,
  answerType: PropTypes.string,
  inputType: PropTypes.string,
  answers: PropTypes.array,
  hasLastInput: PropTypes.bool,
  startValue: PropTypes.string,
  endValue: PropTypes.string,
  stepValue: PropTypes.string,
  type: PropTypes.string.isRequired
};

AnswerSection.defaultProps = {
  answerType: '',
  inputType: '',
  answers: undefined,
  hasLastInput: false,
  startValue: '',
  endValue: '',
  stepValue: ''
};

export default AnswerSection;
