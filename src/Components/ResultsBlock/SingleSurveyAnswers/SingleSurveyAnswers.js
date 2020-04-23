import React from 'react';
import { useParams} from "react-router";

import getSurveyResults  from '../getSurveyResults';

import { SURVEYS } from '../SurveyResultsData'


function SingleSurveyAnswers () {
  const { surveyId } = useParams();

  const results = getSurveyResults(surveyId);

  
  // const { index } = match.params;
  return <div>{surveyId}</div>
}


export default SingleSurveyAnswers;