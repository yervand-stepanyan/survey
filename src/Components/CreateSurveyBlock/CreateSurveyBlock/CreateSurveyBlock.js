import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

import QuestionSection from '../QuestionSection';
import SurveyContext from '../../../State/context';
import SurveyTitle from '../SurveyTitle';
import SurveyTitleCreator from '../SurveyTitleCreator';
import { surveyReducer, titleReducer } from '../../../State/reducer';

const BLOCK_TITLE = 'Create survey';

function CreateSurveyBlock({ classes }) {
  const [surveyState, surveyDispatch] = useReducer(surveyReducer, {
    title: '',
    question: ''
  });
  const { title, question } = surveyState;
  const [state, dispatch] = useReducer(titleReducer, {
    title: '',
    isTitle: false
  });
  const { isTitle } = state;

  return (
    <div className={classes.container}>
      <div className={classes.blockTitleWrapper}>
        <Typography variant="h4">{BLOCK_TITLE}</Typography>
      </div>
      <SurveyContext.Provider
        value={{ state, dispatch, surveyState, surveyDispatch }}
      >
        <div className={classes.createSurveyWrapper}>
          {!title || !isTitle ? <SurveyTitleCreator /> : <SurveyTitle />}
          {question || isTitle ? <QuestionSection /> : null}
        </div>
      </SurveyContext.Provider>
    </div>
  );
}

CreateSurveyBlock.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CreateSurveyBlock;
