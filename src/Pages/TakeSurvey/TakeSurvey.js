import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SurveyQuestions from '../../Components/TakeSurveyBlock/SurveyQuestions';
import SurveyContext from '../../State/context';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey({ match }) {
  const classes = useStyles();
  const { stateSurvey } = useContext(SurveyContext);
  const { id } = match.params;

  const chosenSurvey = stateSurvey.find(item => item.id === id);

  return (
    <div className={classes.container}>
      <SurveyQuestions questions={chosenSurvey.questions} />
    </div>
  );
}

TakeSurvey.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(TakeSurvey);
