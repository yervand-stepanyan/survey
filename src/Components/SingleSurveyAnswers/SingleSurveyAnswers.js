import React from 'react';
import { useParams} from "react-router";

function SingleSurveyAnswers () {
    let { surveyId } = useParams();

    // const { index } = match.params;
    return <div>{surveyId}</div>
}

export default SingleSurveyAnswers;