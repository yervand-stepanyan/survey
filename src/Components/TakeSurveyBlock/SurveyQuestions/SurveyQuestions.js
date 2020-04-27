import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { doPost } from '../../../FetchAPI/fetchData';
import ROUTES from '../../../Routes/Routes';
import SurveyContext from '../../../State/context';
import SurveyQuestion from '../SurveyQuestion';
import {
  TAKE_SURVEY_SNACKBAR_MESSAGE_ERROR,
  TAKE_SURVEY_SNACKBAR_MESSAGE_SUCCESS
} from '../../../Globals/variables';
import { useStyles } from './SurveyQuestions.style';

const SUBMIT_TEXT = 'Submit';

function SurveyQuestions({ questions, survey, title: surveyTitle }) {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [surveyAnswers, setSurveyAnswers] = useState([]);
  const [results, setResults] = useState({});
  const {
    dispatchSurveyAnswer,
    handleOpenSnackbar,
    handleShowSnackbar
  } = useContext(SurveyContext);

  useEffect(() => {
    setResults({ survey, answers: surveyAnswers });
  }, [surveyAnswers]);

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

      dispatchSurveyAnswer({ type: 'ADD_SURVEY_ANSWER', payload: response });

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
          disabled={loading}
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
  survey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default SurveyQuestions;
