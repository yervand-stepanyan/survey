import React from 'react';
import PropTypes from 'prop-types';

import CheckboxSection from '../CheckboxSection';
import DropdownSection from '../DropdownSection';
import InputSection from '../InputSection';
import RadiobuttonSection from '../RadiobuttonSection';
import RangeSection from '../RangeSection';
import { useStyles } from './AnswerSection.style';

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
      case 'input':
        return <InputSection activeId={activeId} inputType={inputType} />;
      case 'radiobutton':
        return (
          <RadiobuttonSection
            activeId={activeId}
            answers={answers}
            hasLastInput={hasLastInput}
          />
        );
      case 'checkbox':
        return <CheckboxSection answers={answers} />;
      case 'dropdown':
        return <DropdownSection answers={answers} />;
      case 'range':
        return (
          <RangeSection
            startValue={startValue}
            endValue={endValue}
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
