import React from 'react';
import { useParams} from "react-router";

import { SURVEYS } from '../SurveyResultsData';


function SingleSurveyAnswers () {
    const { surveyId } = useParams();
    const [exactSurvey] = SURVEYS.filter(result => result.id === +surveyId);
    console.log(exactSurvey);


    // const { index } = match.params;
return <div>{surveyId}</div>
}


export default SingleSurveyAnswers;