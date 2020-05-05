import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import API from '../../fetchAPI/fetchData';
import { addSurvey } from '../../state/actions';
import CreateSurveyBlock from '../../components/CreateSurveyBlock/CreateSurveyBlock';
import Loader from '../../components/Loader';
import {
  CREATE_SURVEY_SNACKBAR_MESSAGE_ERROR,
  CREATE_SURVEY_SNACKBAR_MESSAGE_SUCCESS,
  LOADER_TYPE
} from '../../globals/constants';
import ROUTES from '../../routes/Routes';
import { useStore } from '../../state/use-store';
import { useStyles } from './CreateSurvey.style';

function CreateSurvey() {
  const classes = useStyles();
  const history = useHistory();
  const [allQuestionsSubmitted, setAllQuestionsSubmitted] = useState(false);
  const [isAnswerSubmit, setIsAnswerSubmit] = useState(false);
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [isTitleEdit, setIsTitleEdit] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState('');
  const {
    dispatchSurvey,
    handleOpenSnackbar,
    handleShowSnackbar,
    loadingData
  } = useStore();

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

  const handleSave = async () => {
    const questionsToSave = questions.map(
      ({ isQuestion, isAnswerSubmitted, ...item }) => item
    );
    const surveyData = {
      title,
      questions: questionsToSave
    };

    try {
      setLoading(true);

      const response = await API.post('surveys', surveyData);

      dispatchSurvey(addSurvey(response));

      handleShowSnackbar(true, CREATE_SURVEY_SNACKBAR_MESSAGE_SUCCESS);

      history.push(ROUTES.home);
    } catch (e) {
      setLoading(false);

      handleShowSnackbar(false, CREATE_SURVEY_SNACKBAR_MESSAGE_ERROR);
    } finally {
      handleOpenSnackbar();
    }
  };

  return (
    <div className={classes.createSurveyContainer}>
      {loadingData ? (
        <Loader type={LOADER_TYPE.page} />
      ) : (
        <CreateSurveyBlock
          allQuestionsSubmitted={allQuestionsSubmitted}
          disableSave={disableSave}
          handleAddTitle={handleAddTitle}
          handleEditTitle={handleEditTitle}
          handleIsQuestionOpen={handleIsQuestionOpen}
          handleIsQuestionSubmitted={handleIsQuestionSubmitted}
          handleIsAnswerSubmitted={handleIsAnswerSubmitted}
          handleSave={handleSave}
          handleSetQuestions={handleSetQuestions}
          isAnswerSubmit={isAnswerSubmit}
          isQuestionOpen={isQuestionOpen}
          isQuestionSubmitted={isQuestionSubmitted}
          isSaveDisabled={isSaveDisabled}
          isTitleEdit={isTitleEdit}
          loading={loading}
          questions={questions}
          title={title}
        />
      )}
    </div>
  );
}

export default CreateSurvey;
