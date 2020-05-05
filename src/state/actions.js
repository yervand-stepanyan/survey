export const ADD_SURVEY = 'ADD_SURVEY';
export const ADD_SURVEY_ANSWER = 'ADD_SURVEY_ANSWER';
export const ADD_SURVEY_ANSWERS = 'ADD_SURVEY_ANSWERS';
export const ADD_SURVEYS = 'ADD_SURVEYS';
export const REMOVE_SURVEY = 'REMOVE_SURVEY';

export function addSurvey(survey) {
  return { type: ADD_SURVEY, payload: survey };
}

export function addSurveys(surveys) {
  return { type: ADD_SURVEYS, payload: surveys };
}

export function removeSurvey(id) {
  return { type: REMOVE_SURVEY, payload: id };
}

export function addSurveyAnswer(surveyAnswer) {
  return { type: ADD_SURVEY_ANSWER, payload: surveyAnswer };
}

export function addSurveyAnswers(surveyAnswers) {
  return { type: ADD_SURVEY_ANSWERS, payload: surveyAnswers };
}
