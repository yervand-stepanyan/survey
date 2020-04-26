import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import SurveyQuestions from '../../Components/TakeSurveyBlock/SurveyQuestions';
import SurveyContext from '../../State/context';
import { useStyles } from './TakeSurvey.style';

function TakeSurvey({ match }) {
  const classes = useStyles();
  const { surveys } = useContext(SurveyContext);
  const { id } = match.params;

  const chosenSurvey = surveys.find(item => {
    return item.id === id;
  });

  return (
    <div className={classes.container}>
      <SurveyQuestions
        questions={chosenSurvey.questions}
        survey={chosenSurvey.id}
      />
    </div>
  );
}

TakeSurvey.propTypes = {
  match: PropTypes.object.isRequired
};

export default withRouter(TakeSurvey);
