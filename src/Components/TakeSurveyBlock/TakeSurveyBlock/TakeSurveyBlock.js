import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

import {
  NOT_FOUND_SURVEY_TITLE,
  NOT_FOUND_SURVEY_TEXT
} from '../../../Globals/variables';
import SurveyQuestions from '../SurveyQuestions';
import { useStore } from '../../../State/use-store';
import { useStyles } from './TakeSurveyBlock.style';

function TakeSurveyBlock() {
  const classes = useStyles();
  const { id } = useParams();
  const { stateSurvey } = useStore();
  const [survey, setSurvey] = useState(
    stateSurvey.find(item => item.id === id)
  );

  useEffect(() => {
    const surveyObject = stateSurvey.find(item => item.id === id);

    if (surveyObject) {
      setSurvey(surveyObject);
    }
  }, [stateSurvey, id]);

  return (
    <div className={classes.takeSurveyBlockContainer}>
      <div>
        {survey ? (
          <SurveyQuestions
            questions={survey.questions}
            surveyId={survey.id}
            title={survey.title}
          />
        ) : (
          <div className={classes.notFoundContainer}>
            <Typography variant="h3" color="secondary">
              {NOT_FOUND_SURVEY_TITLE}
            </Typography>
            <Typography variant="h4" color="primary">
              {NOT_FOUND_SURVEY_TEXT}
            </Typography>
          </div>
        )}
      </div>
    </div>
  );
}

export default TakeSurveyBlock;
