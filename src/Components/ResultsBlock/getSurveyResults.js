import { SURVEY } from './SurveyResultsData'

function getSurveyResults () {

    const results = {};
    
    SURVEY.questions.forEach(question => {
    
      if ( typeof results[question.questionId]  === 'undefined' ) {
        results[question.questionId] = {
          answers: [],
          title: question.title
        }
      }
    
      if (question.answerType === 'checkbox') {
        question.answers.forEach(answer => {
          answer.markedAnswers.forEach(option => {
            if (typeof results[question.questionId].answers[option] === 'undefined') {
                results[question.questionId].answers[option] = 0;
            }
    
            results[question.questionId].answers[option] += 1;
    
          })
        })
      } 
      
      else if ( question.answerType === 'dropdown') {
        question.answers.forEach(answer => {
          if (typeof results[question.questionId].answers[answer.customAnswer] === 'undefined') {
            results[question.questionId].answers[answer.customAnswer] = 0;
          }
    
          results[question.questionId].answers[answer.customAnswer] += 1;
    
        })
      }
    
      else if ( question.answerType === 'radiobutton' ) {
        question.answers.forEach(answer => {
          if (answer.markedAnswers.length > 0 ) {
            answer.markedAnswers.forEach(option => {
              if (typeof results[question.questionId].answers[option] === 'undefined') {
                results[question.questionId].answers[option] = 0;
              }
    
              results[question.questionId].answers[option] += 1;
    
            })
          }
          
          else {
            if (typeof results[question.questionId].answers.other === 'undefined') {
                results[question.questionId].answers.other = 0;
            }
    
            results[question.questionId].answers.other += 1;
          }
    
        })
      }
    
      else if (question.answerType === 'range') {
        question.answers.forEach(answer => {
          if (typeof results[question.questionId].answers[answer.customAnswer] === 'undefined') {
            results[question.questionId].answers[answer.customAnswer] = 0;
          }
    
          results[question.questionId].answers[answer.customAnswer] += 1;
    
        })
      }
    
      else if (question.answerType === 'text') {
        
        results[question.questionId].answers = question.answers.length
        
      }
    })
    console.log(results)
}

export default getSurveyResults;
