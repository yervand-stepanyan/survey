import React from 'react';
import PropTypes from 'prop-types';
import { useParams} from "react-router";

function SingleSurveyAnswers () {
    const { surveyId } = useParams();

    // const { index } = match.params;
    return <div>{surveyId}</div>
}

SingleSurveyAnswers.propTypes = {
    surveyId: PropTypes.number.isRequired,
}

export default SingleSurveyAnswers;