import React from 'react';
import PropTypes from 'prop-types';

import { ANSWER_TYPES } from '../../../Globals/variables';
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
      case ANSWER_TYPES.input:
        return <InputSection activeId={activeId} inputType={inputType} />;
      case ANSWER_TYPES.radiobutton:
        return (
          <RadiobuttonSection
            activeId={activeId}
            answers={answers}
            hasLastInput={hasLastInput}
          />
        );
      case ANSWER_TYPES.checkbox:
        return <CheckboxSection activeId={activeId} answers={answers} />;
      case ANSWER_TYPES.dropdown:
        return <DropdownSection activeId={activeId} answers={answers} />;
      case ANSWER_TYPES.range:
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
  answers: PropTypes.array,
  answerType: PropTypes.string,
  endValue: PropTypes.string,
  hasLastInput: PropTypes.bool,
  inputType: PropTypes.string,
  startValue: PropTypes.string,
  stepValue: PropTypes.string,
  type: PropTypes.string.isRequired
};

AnswerSection.defaultProps = {
  answers: undefined,
  answerType: '',
  endValue: '',
  hasLastInput: false,
  inputType: '',
  startValue: '',
  stepValue: ''
};

export default AnswerSection;
