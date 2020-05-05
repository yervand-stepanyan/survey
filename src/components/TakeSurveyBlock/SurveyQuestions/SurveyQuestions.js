import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { addSurveyAnswer } from '../../../state/actions';
import API from '../../../fetchAPI/fetchData';
import {
  BUTTON_LABELS,
  TAKE_SURVEY_SNACKBAR_MESSAGE_ERROR,
  TAKE_SURVEY_SNACKBAR_MESSAGE_SUCCESS
} from '../../../globals/constants';
import ButtonLoader from '../../Loaders/ButtonLoader';
import ROUTES from '../../../routes/Routes';
import SurveyQuestion from '../SurveyQuestion';
import { useStore } from '../../../state/use-store';
import { useStyles } from './SurveyQuestions.style';

function SurveyQuestions({ questions, surveyId, title: surveyTitle }) {
  const classes = useStyles();
  const history = useHistory();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({});
  const [surveyAnswers, setSurveyAnswers] = useState([]);
  const {
    stateSurvey,
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

      const response = await API.post('survey-answers', results);
      const postedResult = {
        ...response,
        survey: stateSurvey.find(survey => survey.id === response.survey)
      };

      dispatchSurveyAnswer(addSurveyAnswer(postedResult));

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
        <Typography variant="h4">{surveyTitle}</Typography>
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
              receiveAnswers={receiveAnswers}
              startValue={startValue}
              stepValue={stepValue}
              title={title}
            />
          );
        }
      )}
      <div className={classes.buttonWrapper}>
        <Button
          className={classes.button}
          disabled={loading || isButtonDisabled}
          onClick={handleSubmit}
          size="large"
          variant="contained"
        >
          {BUTTON_LABELS.surveyQuestionsSubmit}
        </Button>
        {loading && <ButtonLoader color="green" />}
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
