import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';

import QuestionSection from '../QuestionSection';
import SaveSurvey from '../SaveSurvey';
import SurveyTitle from '../SurveyTitle';
import SurveyTitleCreator from '../SurveyTitleCreator';
import { useStyles } from './CreateSurveyBlock.style';

const BLOCK_TITLE = 'Create survey';

function CreateSurveyBlock() {
  const classes = useStyles();
  const [isTitle, setIsTitle] = useState(false);
  const [title, setTitle] = useState('');
  const [isQuestion, setIsQuestion] = useState(false);
  const [questions, setQuestions] = useState([]);

  const isQuestionSet = bool => {
    setIsQuestion(bool);
  };

  const updateQuestionsList = arr => {
    setQuestions(arr);
  };

  return (
    <div className={classes.createSurveyBlockContainer}>
      <div className={classes.blockTitleWrapper}>
        <Typography variant="h4">{BLOCK_TITLE}</Typography>
      </div>
      <div className={classes.createSurveyWrapper}>
        <div className={classes.titleWrapper}>
          {title && isTitle ? (
            <SurveyTitle title={title} setIsTitle={setIsTitle} />
          ) : (
            <SurveyTitleCreator
              title={title}
              setTitle={setTitle}
              setIsTitle={setIsTitle}
            />
          )}
        </div>
        {isQuestion || isTitle ? (
          <QuestionSection
            isQuestionSet={isQuestionSet}
            updateQuestionsList={updateQuestionsList}
          />
        ) : null}
        {questions.length > 0 ? <SaveSurvey /> : null}
      </div>
    </div>
  );
}

export default CreateSurveyBlock;
