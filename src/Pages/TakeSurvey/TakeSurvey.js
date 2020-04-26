import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import SurveyContext from '../../State/context';
import SurveyQuestions from '../../Components/TakeSurveyBlock/SurveyQuestions';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();
  const { id } = useParams();
  const { stateSurvey } = useContext(SurveyContext);
  const survey = stateSurvey.find(item => item.id === id);
  const { title, questions } = survey;

  return (
    <div className={classes.container}>
      <SurveyQuestions questions={questions} title={title} />
    </div>
  );
}

export default TakeSurvey;
