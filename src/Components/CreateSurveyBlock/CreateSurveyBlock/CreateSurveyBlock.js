import React, { useContext, useState } from 'react';
import uuid from 'react-uuid';

import Typography from '@material-ui/core/Typography';

import QuestionSection from '../QuestionSection';
import SaveSurvey from '../SaveSurvey';
import SurveyContext from '../../../State/context';
import SurveyTitle from '../SurveyTitle';
import SurveyTitleCreator from '../SurveyTitleCreator';
import { useStyles } from './CreateSurveyBlock.style';

const BLOCK_TITLE = 'Create survey';

function CreateSurveyBlock() {
  const classes = useStyles();
  const [allQuestionsSubmitted, setAllQuestionsSubmitted] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [isTitleEdit, setIsTitleEdit] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState('');
  const { dispatchSurvey } = useContext(SurveyContext);

  const handleAddTitle = titleValue => {
    setTitle(titleValue);

    setIsTitleEdit(false);

    setIsSaveDisabled(false);
  };

  const handleEditTitle = () => {
    setIsTitleEdit(true);

    setIsSaveDisabled(true);
  };

  const handleIsQuestionOpen = () => {
    setIsQuestionOpen(true);
  };

  const handleIsQuestionSubmitted = bool => {
    setIsQuestionSubmitted(bool);
  };

  const handleIsAnswerSubmitted = bool => {
    setIsAnswerSubmitted(bool);
  };

  const handleSetQuestions = questionsArray => {
    setQuestions(questionsArray);

    setAllQuestionsSubmitted(
      questionsArray.every(question => question.isAnswerSubmitted)
    );
  };

  const disableSave = bool => {
    setIsSaveDisabled(bool);
  };

  const handleSave = () => {
    const date = new Date();
    const questionsToSave = questions.map(({ isQuestion, ...item }) => item);

    const surveyData = {
      id: uuid(),
      createDate: date,
      title,
      questions: questionsToSave
    };

    dispatchSurvey({ type: 'ADD_SURVEY', payload: surveyData });

    setIsSaveDisabled(true);
  };

  return (
    <div className={classes.createSurveyBlockContainer}>
      <div className={classes.blockTitleWrapper}>
        <Typography variant="h4">{BLOCK_TITLE}</Typography>
      </div>
      <div className={classes.createSurveyWrapper}>
        <SurveyContext.Provider
          value={{
            disableSave,
            handleIsAnswerSubmitted,
            handleIsQuestionSubmitted
          }}
        >
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
          {isQuestionOpen || !isTitleEdit ? (
            <QuestionSection
              handleIsQuestionOpen={handleIsQuestionOpen}
              handleSetQuestions={handleSetQuestions}
              questions={questions}
            />
          ) : null}
          {questions && questions.length ? (
            <SaveSurvey
              disabled={
                isTitleEdit ||
                !allQuestionsSubmitted ||
                !isQuestionSubmitted ||
                !isAnswerSubmitted ||
                isSaveDisabled
              }
              handleSave={handleSave}
            />
          ) : null}
        </SurveyContext.Provider>
      </div>
    </div>
  );
}

export default CreateSurveyBlock;
