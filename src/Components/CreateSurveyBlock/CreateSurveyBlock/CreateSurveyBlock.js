import React, { useState } from 'react';
// import uuid from 'react-uuid';
// useReducer,
import Typography from '@material-ui/core/Typography';

import QuestionSection from '../QuestionSection';
import SaveSurvey from '../SaveSurvey';
import SurveyContext from '../../../State/context';
// import { surveyReducer } from '../../../State/reducer';
import SurveyTitle from '../SurveyTitle';
import SurveyTitleCreator from '../SurveyTitleCreator';
import { useStyles } from './CreateSurveyBlock.style';

const BLOCK_TITLE = 'Create survey';

function CreateSurveyBlock() {
  const classes = useStyles();
  // const [activeId, setActiveId] = useState('');
  // const [isTitle, setIsTitle] = useState(false);
  // const [isQuestion, setIsQuestion] = useState(false);
  // const [isDisabled, setIsDisabled] = useState(true);
  // const [titleValue, setTitleValue] = useState('');
  // const [stateSurvey, dispatchSurvey] = useReducer(surveyReducer, {});
  // const { questions } = stateSurvey;

  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [isQuestion, setIsQuestion] = useState(false);
  const [isTitleEdit, setIsTitleEdit] = useState(true);
  const [questions, setQuestions] = useState([]);
  // const [surveys, setSurvey] = useState([]);
  const [title, setTitle] = useState('');

  const handleAddTitle = titleValue => {
    setTitle(titleValue);

    setIsTitleEdit(false);

    setIsSaveDisabled(false);
  };

  const handleEditTitle = () => {
    setIsTitleEdit(true);

    setIsSaveDisabled(true);
  };

  const handleIsQuestion = () => {
    setIsQuestion(true);
  };

  const handleSetQuestions = questionsArray => {
    setQuestions(questionsArray);
  };

  // const handleAddSurveyTitle = title => {
  //   if (activeId) {
  //     dispatchSurvey({ type: 'EDIT_TITLE', payload: title });
  //
  //     setIsTitle(true);
  //
  //     setTitleValue(title);
  //   } else {
  //     const id = activeId || uuid();
  //     const surveyData = { id, title };
  //
  //     dispatchSurvey({ type: 'ADD_TITLE', payload: surveyData });
  //
  //     setActiveId(id);
  //
  //     setIsTitle(true);
  //
  //     setTitleValue(title);
  //   }
  // };

  const disableSave = bool => {
    setIsSaveDisabled(bool);
  };

  return (
    <div className={classes.createSurveyBlockContainer}>
      <div className={classes.blockTitleWrapper}>
        <Typography variant="h4">{BLOCK_TITLE}</Typography>
      </div>
      <div className={classes.createSurveyWrapper}>
        <SurveyContext.Provider value={{ disableSave }}>
          <div className={classes.titleWrapper}>
            {isTitleEdit ? (
              <SurveyTitleCreator
                handleAddTitle={handleAddTitle}
                title={title}
              />
            ) : (
              <SurveyTitle handleEditTitle={handleEditTitle} title={title} />
            )}
          </div>
          {isQuestion || !isTitleEdit ? (
            <QuestionSection
              handleIsQuestion={handleIsQuestion}
              handleSetQuestions={handleSetQuestions}
              questions={questions}
            />
          ) : null}
          {questions && questions.length ? (
            <SaveSurvey disabled={isSaveDisabled} />
          ) : null}
        </SurveyContext.Provider>
      </div>
    </div>
  );
}

export default CreateSurveyBlock;
