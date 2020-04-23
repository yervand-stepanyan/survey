import React from 'react';
import { useParams} from "react-router";

import getSurveyResults from '../getSurveyResults';

import { SURVEY } from '../SurveyResultsData';


function SingleSurveyAnswers () {
  const { surveyId } = useParams();

  const results = getSurveyResults();

  console.log(results)
  
  
  
  // const { index } = match.params;
  return <div>{surveyId}</div>
}


export default SingleSurveyAnswers;