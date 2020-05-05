import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import { TEXT_LABEL } from '../../../globals/constants';
import QuestionSection from '../QuestionSection';
import SaveSurvey from '../SaveSurvey';
import StoreContext from '../../../state/context';
import SurveyTitle from '../SurveyTitle';
import SurveyTitleCreator from '../SurveyTitleCreator';
import { useStyles } from './CreateSurveyBlock.style';

function CreateSurveyBlock({
  allQuestionsSubmitted,
  disableSave,
  handleAddTitle,
  handleEditTitle,
  handleIsQuestionOpen,
  handleIsQuestionSubmitted,
  handleIsAnswerSubmitted,
  handleSave,
  handleSetQuestions,
  isAnswerSubmit,
  isQuestionOpen,
  isQuestionSubmitted,
  isSaveDisabled,
  isTitleEdit,
  loading,
  questions,
  title
}) {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.createSurveyBlockContainer}>
        <div className={classes.blockTitleWrapper}>
          <Typography variant="h4">
            {TEXT_LABEL.createSurveyPageTitle}
          </Typography>
        </div>
        <div className={classes.createSurveyWrapper}>
          <StoreContext.Provider
            value={{
              disableSave,
              handleIsAnswerSubmitted,
              handleIsQuestionSubmitted
            }}
          >
            <Card className={classes.titleWrapper}>
              {isTitleEdit ? (
                <SurveyTitleCreator
                  handleAddTitle={handleAddTitle}
                  title={title}
                />
              ) : (
                <SurveyTitle handleEditTitle={handleEditTitle} title={title} />
              )}
            </Card>
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
          </StoreContext.Provider>
        </div>
      </div>
    </Container>
  );
}

CreateSurveyBlock.propTypes = {
  allQuestionsSubmitted: PropTypes.bool.isRequired,
  disableSave: PropTypes.func.isRequired,
  handleAddTitle: PropTypes.func.isRequired,
  handleEditTitle: PropTypes.func.isRequired,
  handleIsQuestionOpen: PropTypes.func.isRequired,
  handleIsQuestionSubmitted: PropTypes.func.isRequired,
  handleIsAnswerSubmitted: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  handleSetQuestions: PropTypes.func.isRequired,
  isAnswerSubmit: PropTypes.bool.isRequired,
  isQuestionOpen: PropTypes.bool.isRequired,
  isQuestionSubmitted: PropTypes.bool.isRequired,
  isSaveDisabled: PropTypes.bool.isRequired,
  isTitleEdit: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  questions: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default CreateSurveyBlock;
