function PrepareSurveyResults(submissions) {

  const results = {};

  submissions.forEach(submission => {

    submission.answers.forEach(answer => {
      const [subQuestion] = submission.survey.questions.filter(question => question.id === answer.questionId)

      if (typeof results[answer.questionId] === 'undefined') {

        results[answer.questionId] = {
          title: subQuestion.title,
          type: subQuestion.answerType,
          answers: {},
          textAnswers: []
        }
      }

      if (results[answer.questionId].type === 'CHECKBOX') {
        answer.markedAnswers.forEach(optionId => {
          if (typeof results[answer.questionId].answers[optionId] === 'undefined') {
            results[answer.questionId].answers[optionId] = {name: optionId, value: 0}
          }

          results[answer.questionId].answers[optionId].value += 1;
        })
      }

      else if (results[answer.questionId].type === 'RADIOBUTTON') {
        console.log(answer)
        if(answer.markedAnswers.length > 0) {
          if (typeof results[answer.questionId].answers[answer.markedAnswers[0]] === 'undefined') {
            results[answer.questionId].answers[answer.markedAnswers[0]] = {name: answer.markedAnswers[0], value: 0}
          }
          results[answer.questionId].answers[answer.markedAnswers[0]].value += 1;
        } 

        else {
          if ( typeof results[answer.questionId].answers.other === 'undefined') {
            results[answer.questionId].answers.other = {name: 'other', value: 0}
          }
          results[answer.questionId].answers.other.value +=1

        }
      }

      else if (results[answer.questionId].type === 'DROPDOWN') {
        if (typeof results[answer.questionId].answers[answer.customAnswer] === 'undefined') {
          results[answer.questionId].answers[answer.customAnswer] = {name: answer.customAnswer, value: 0}
        }
        results[answer.questionId].answers[answer.customAnswer].value += 1;
      }

      else if (results[answer.questionId].type === 'RANGE') {
        if (typeof results[answer.questionId].answers[answer.customAnswer] === 'undefined') {
          results[answer.questionId].answers[answer.customAnswer] = {name: answer.customAnswer, answers: 0}
        }
        results[answer.questionId].answers[answer.customAnswer].answers += 1;
        results[answer.questionId].startValue = 1;
        results[answer.questionId].endValue = 100;
        results[answer.questionId].steptValue = 1;

      }

      else if (results[answer.questionId].type === 'TEXT') {
        results[answer.questionId].textAnswers.push(answer.customAnswer);
      }
    })
  })

  return results;





























  // let SURVEYS = [];
  // const SURVEY_ANSWERS = SURVEYS.filter(survey => +survey.surveyId === 1);
  // SURVEY_ANSWERS.map(userAnswers =>
  //   userAnswers.questions.forEach(question => {
  //     if (typeof results[question.id] === 'undefined') {
  //       results[question.id] = {
  //         title: question.title,
  //         type: question.answerType,
  //         answers: {},
  //         textAnswers: []
  //       };
  //     }

  //     if (question.answerType === 'checkbox') {
  //       question.answers.markedAnswers.forEach(option => {
  //         if (typeof results[question.id].answers[option] === 'undefined') {
  //           results[question.id].answers[option] = { name: option, value: 0 };
  //         }

  //         results[question.id].answers[option].value += 1;
  //       });
  //     } else if (question.answerType === 'dropdown') {
  //       if (question.answers.markedAnswers.length > 0) {
  //         question.answers.markedAnswers.forEach(option => {
  //           if (typeof results[question.id].answers[option] === 'undefined') {
  //             results[question.id].answers[option] = { name: option, value: 0 };
  //           }

  //           results[question.id].answers[option].value += 1;
  //         });
  //       }
  //     } else if (question.answerType === 'radiobutton') {
  //       if (question.answers.markedAnswers.length > 0) {
  //         question.answers.markedAnswers.forEach(option => {
  //           if (typeof results[question.id].answers[option] === 'undefined') {
  //             results[question.id].answers[option] = { name: option, value: 0 };
  //           }

  //           results[question.id].answers[option].value += 1;
  //         });
  //       } else {
  //         if (typeof results[question.id].answers.other === 'undefined') {
  //           results[question.id].answers.other = { name: 'other', value: 0 };
  //         }

  //         results[question.id].answers.other.value += 1;
  //       }
  //     } else if (question.answerType === 'range') {
  //       if (
  //         typeof results[question.id].answers[question.answers.customAnswer] ===
  //         'undefined'
  //       ) {
  //         results[question.id].answers[question.answers.customAnswer] = {
  //           name: question.answers.customAnswer,
  //           answers: 0
  //         };
  //       }

  //       results[question.id].answers[
  //         question.answers.customAnswer
  //       ].answers += 1;
  //       results[question.id].startValue = question.startValue;
  //       results[question.id].endValue = question.endValue;
  //       results[question.id].stepValue = question.stepValue;
  //     } else if (question.answerType === 'text') {
  //       if (typeof results[question.id].count === 'undefined') {
  //         results[question.id].count = 0;
  //       }

  //       results[question.id].count += 1;
  //       results[question.id].textAnswers.push(question.answers.customAnswer);
  //     }
  //   })
  // );
  // return results;
}

export default PrepareSurveyResults;
