import React, { useReducer, useState } from 'react';
import uuid from 'react-uuid';

import Typography from '@material-ui/core/Typography';

import QuestionSection from '../QuestionSection';
import SurveyContext from '../../../State/context';
import { surveyReducer } from '../../../State/reducer';
import SaveSurvey from '../SaveSurvey';
import SurveyTitle from '../SurveyTitle';
import SurveyTitleCreator from '../SurveyTitleCreator';
import { useStyles } from './CreateSurveyBlock.style';

const BLOCK_TITLE = 'Create survey';

function CreateSurveyBlock() {
  const classes = useStyles();
  const [activeId, setActiveId] = useState('');
  const [isTitle, setIsTitle] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [isQuestion, setIsQuestion] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [stateSurvey, dispatchSurvey] = useReducer(surveyReducer, {});
  const { questions } = stateSurvey;

  const handleAddSurveyTitle = title => {
    if (activeId) {
      dispatchSurvey({ type: 'EDIT_TITLE', payload: title });

      setIsTitle(true);

      setTitleValue(title);
    } else {
      const id = activeId || uuid();
      const surveyData = { id, title };

      dispatchSurvey({ type: 'ADD_TITLE', payload: surveyData });

      setActiveId(id);

      setIsTitle(true);

      setTitleValue(title);
    }
  };

  const handleEditTitle = () => {
    setIsTitle(false);
  };

  const isQuestionSet = bool => {
    setIsQuestion(bool);
  };

  const disableSave = bool => {
    setIsDisabled(bool);
  };

  return (
    <div className={classes.createSurveyBlockContainer}>
      <div className={classes.blockTitleWrapper}>
        <Typography variant="h4">{BLOCK_TITLE}</Typography>
      </div>
      <div className={classes.createSurveyWrapper}>
        <SurveyContext.Provider
          value={{ stateSurvey, dispatchSurvey, disableSave }}
        >
          <div className={classes.titleWrapper}>
            {titleValue && isTitle ? (
              <SurveyTitle
                title={titleValue}
                setIsTitle={setIsTitle}
                onEdit={handleEditTitle}
              />
            ) : (
              <SurveyTitleCreator
                title={titleValue}
                setTitle={setTitleValue}
                setIsTitle={setIsTitle}
                addTitle={handleAddSurveyTitle}
              />
            )}
          </div>
          {isQuestion || isTitle ? (
            <QuestionSection
              // disableSave={disableSave}
              isQuestionSet={isQuestionSet}
            />
          ) : null}
          {questions && questions.length ? (
            <SaveSurvey disabled={isDisabled} />
          ) : null}
        </SurveyContext.Provider>
      </div>
    </div>
  );
}

export default CreateSurveyBlock;
