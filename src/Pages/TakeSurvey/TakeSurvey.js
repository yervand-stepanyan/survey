import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import SurveyQuestions from '../../Components/TakeSurveyBlock/SurveyQuestions';
import SurveyContext from '../../State/context';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey() {
  const classes = useStyles();
  const { stateSurvey } = useContext(SurveyContext);
  const { id } = useParams();

  const chosenSurvey = stateSurvey.find(item => item.id === id);

  return (
    <div className={classes.container}>
      <SurveyQuestions questions={chosenSurvey.questions} />
    </div>
  );
}

export default TakeSurvey;
