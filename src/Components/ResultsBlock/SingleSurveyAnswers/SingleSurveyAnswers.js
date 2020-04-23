import React from 'react';
import { useParams} from "react-router";

import getSurveyResults  from '../getSurveyResults';

import { SURVEYS } from '../SurveyResultsData'


function SingleSurveyAnswers () {
  const { surveyId } = useParams();

  const result = getSurveyResults(surveyId);

  console.log(result);
  return <div>{surveyId}</div>
}


export default SingleSurveyAnswers;