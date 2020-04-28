import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';

import SurveyQuestions from '../../Components/TakeSurveyBlock/SurveyQuestions';
import { useStore } from '../../State/use-store';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
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
    <div className={classes.takeSurveyContainer}>
      {stateSurvey.length && survey ? (
        <SurveyQuestions
          questions={survey.questions}
          surveyId={survey.id}
          title={survey.title}
        />
      ) : (
        <div>
          <CircularProgress size={60} thickness={4} />
        </div>
      )}
    </div>
  );
}

export default TakeSurvey;
