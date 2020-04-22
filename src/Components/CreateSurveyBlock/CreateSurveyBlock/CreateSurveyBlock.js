import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

import Typography from '@material-ui/core/Typography';

import QuestionSection from '../QuestionSection';
import ROUTES from '../../../Routes/Routes';
import SaveSurvey from '../SaveSurvey';
import SurveyContext from '../../../State/context';
import SurveyTitle from '../SurveyTitle';
import SurveyTitleCreator from '../SurveyTitleCreator';
import { useStyles } from './CreateSurveyBlock.style';

const BLOCK_TITLE = 'Create survey';

function CreateSurveyBlock({ history }) {
  const classes = useStyles();
  const [allQuestionsSubmitted, setAllQuestionsSubmitted] = useState(false);
  const [isAnswerSubmit, setIsAnswerSubmit] = useState(false);
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [isTitleEdit, setIsTitleEdit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState('');
  const { dispatchSurvey, handleOpenSnackbar, handleShowSuccess } = useContext(
    SurveyContext
  );
  const timer = React.useRef();

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

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
    setIsAnswerSubmit(bool);
  };

  const handleSetQuestions = questionsArray => {
    setQuestions(questionsArray);

    setAllQuestionsSubmitted(
      questionsArray.every(question => question.isAnswerSubmit)
    );
  };

  const disableSave = bool => {
    setIsSaveDisabled(bool);
  };

  const handleSave = () => {
    const date = new Date();
    const questionsToSave = questions.map(
      ({ isQuestion, isAnswerSubmitted, ...item }) => item
    );

    const surveyData = {
      id: uuid(),
      createDate: date,
      title,
      questions: questionsToSave
    };

    dispatchSurvey({ type: 'ADD_SURVEY', payload: surveyData });

    if (!loading) {
      setLoading(true);
      timer.current = setTimeout(() => {
        setLoading(false);

        history.push(ROUTES.home);
      }, 2000);
    }

    if (!loading) {
      handleShowSuccess(true);
    } else {
      handleShowSuccess(false);
    }

    handleOpenSnackbar();

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
                !isAnswerSubmit ||
                isSaveDisabled
              }
              handleSave={handleSave}
              loading={loading}
            />
          ) : null}
        </SurveyContext.Provider>
      </div>
    </div>
  );
}

CreateSurveyBlock.propTypes = {
  history: PropTypes.object.isRequired
};

export default CreateSurveyBlock;
