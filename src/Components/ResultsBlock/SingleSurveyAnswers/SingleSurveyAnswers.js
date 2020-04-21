import React from 'react';
import { useParams} from "react-router";

import { SURVEYS } from '../SurveyResultsData';


function SingleSurveyAnswers () {
    const { surveyId } = useParams();

    const [result] = SURVEYS.filter(res => res.id === +surveyId);


    // const { index } = match.params;
return <div>{surveyId}</div>
}


export default SingleSurveyAnswers;