import { SURVEYS } from './SurveyResultsData'

function getSurveyResults (id) {

  const SURVEY_ANSWERS = SURVEYS.filter(survey => +survey.surveyId === +id )

  const results = [];

  SURVEY_ANSWERS.map(userAnswers => (

  userAnswers.questions.forEach(question => {

      if ( typeof results[question.id]  === 'undefined' ) {
        results[question.id] = {
          title: question.title,
          type: question.answerType,
          answers: {},
          textAnswers: []
        } 
      }
    
      if (question.answerType === 'checkbox') {
        question.answers.markedAnswers.forEach(option => {
          if (typeof results[question.id].answers[option] === 'undefined') {
              results[question.id].answers[option] = {name: option, value: 0};
          }
  
          results[question.id].answers[option].value += 1;
        })
      } 
      
      else if ( question.answerType === 'dropdown') {

        if (question.answers.markedAnswers.length > 0 ) {
          question.answers.markedAnswers.forEach(option => {
            if (typeof results[question.id].answers[option] === 'undefined') {
              results[question.id].answers[option] = {name: option, value: 0};
            }
  
            results[question.id].answers[option].value += 1;
  
          })
        }
      }
    
      else if ( question.answerType === 'radiobutton' ) {
        if (question.answers.markedAnswers.length > 0 ) {
          question.answers.markedAnswers.forEach(option => {
            if (typeof results[question.id].answers[option] === 'undefined') {
              results[question.id].answers[option] = {name: option, value: 0};
            }
  
            results[question.id].answers[option].value += 1;
  
          })
        }
        else {
          if (typeof results[question.id].answers.other === 'undefined') {
              results[question.id].answers.other = {name: 'other', value: 0 };
          }
  
          results[question.id].answers.other.value += 1;
        }
      }
    
      else if (question.answerType === 'range') {
        if (typeof results[question.id].answers[question.answers.customAnswer] === 'undefined') {
          results[question.id].answers[question.answers.customAnswer] = {name: question.answers.customAnswer, answers: 0 };
        }
  
        results[question.id].answers[question.answers.customAnswer].answers += 1;
        results[question.id].startValue = question.startValue;
        results[question.id].endValue = question.endValue;
        results[question.id].stepValue = question.stepValue;


      }
    
      else if (question.answerType === 'text') {
        if (typeof results[question.id].count === 'undefined') {
          results[question.id].count = 0
        }

        results[question.id].count += 1;
        results[question.id].textAnswers.push(question.answers.customAnswer);
      
      }
    })
  ))
  console.log(10000)
   console.log(results)
  return results;
}


export default getSurveyResults;
