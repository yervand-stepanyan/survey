import React from 'react';
import {RadialChart} from 'react-vis'

import { useParams} from "react-router";


import getSurveyResults  from '../getSurveyResults';


function SingleSurveyAnswers () {
  const { surveyId } = useParams();
  
  const result = getSurveyResults(surveyId);

  console.log(result);
  const myData = [{angle: 1}, {angle: 5}, {angle: 2}]

  return (
    <div>
      {/* {
        Object.keys(result).forEach(res => (
          
        ))
      } */}
      <RadialChart 
        data={myData}
        width={300}
        height={300} 
        animation
        labelsAboveChildren
        showLabels
      />
    </div>
  )
}


export default SingleSurveyAnswers;