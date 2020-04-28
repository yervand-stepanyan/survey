import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { addSurveyAnswer } from '../../../State/actions';
import { doPost } from '../../../FetchAPI/fetchData';
import ROUTES from '../../../Routes/Routes';
import SurveyQuestion from '../SurveyQuestion';
import {
  TAKE_SURVEY_SNACKBAR_MESSAGE_ERROR,
  TAKE_SURVEY_SNACKBAR_MESSAGE_SUCCESS
} from '../../../Globals/variables';
import { useStore } from '../../../State/use-store';
import { useStyles } from './SurveyQuestions.style';

const SUBMIT_TEXT = 'Submit';

function SurveyQuestions({ questions, surveyId, title: surveyTitle }) {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [surveyAnswers, setSurveyAnswers] = useState([]);
  const {
    dispatchSurveyAnswer,
    handleOpenSnackbar,
    handleShowSnackbar
  } = useStore();

  useEffect(() => {
    const disableButton = surveyAnswers.some(
      answer =>
        answer.markedAnswers[0] === undefined && answer.customAnswer === ''
    );
    setIsButtonDisabled(disableButton);
    setResults({ survey: surveyId, answers: surveyAnswers });
  }, [surveyId, surveyAnswers]);

  const receiveAnswers = (markedAnswers, customAnswer, questionId) => {
    if (surveyAnswers.some(answer => answer.questionId === questionId)) {
      const newSurveyAnswers = surveyAnswers.map(item =>
        item.questionId === questionId
          ? {
              ...item,
              markedAnswers,
              customAnswer
            }
          : item
      );

      setSurveyAnswers(newSurveyAnswers);
    } else {
      setSurveyAnswers([
        ...surveyAnswers,
        {
          markedAnswers,
          customAnswer,
          questionId
        }
      ]);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await doPost('survey-answers', results);

      dispatchSurveyAnswer(addSurveyAnswer(response));

      handleShowSnackbar(true, TAKE_SURVEY_SNACKBAR_MESSAGE_SUCCESS);

      history.push(ROUTES.home);
    } catch (e) {
      setLoading(false);

      handleShowSnackbar(false, TAKE_SURVEY_SNACKBAR_MESSAGE_ERROR);
    } finally {
      handleOpenSnackbar();
    }
  };

  return (
    <div className={classes.surveyQuestionsContainer}>
      <div className={classes.titleContainer}>
        <Typography variant="h3">{surveyTitle}</Typography>
      </div>
      {questions.map(
        ({
          answers,
          answerType,
          endValue,
          hasLastInput,
          id,
          inputType,
          startValue,
          stepValue,
          title
        }) => {
          return (
            <SurveyQuestion
              answers={answers}
              answerType={answerType}
              endValue={endValue}
              hasLastInput={hasLastInput}
              id={id}
              inputType={inputType}
              key={id}
              startValue={startValue}
              stepValue={stepValue}
              title={title}
              receiveAnswers={receiveAnswers}
            />
          );
        }
      )}
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.menuItemButton}
          disabled={loading || isButtonDisabled}
          onClick={handleSubmit}
          variant="contained"
        >
          {SUBMIT_TEXT}
        </Button>
        {loading && (
          <CircularProgress
            className={classes.buttonProgress}
            size={24}
            thickness={8}
          />
        )}
      </div>
    </div>
  );
}

SurveyQuestions.propTypes = {
  questions: PropTypes.array.isRequired,
  surveyId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SurveyQuestions;
