function PrepareSurveyResults(submissions) {
  const results = {};

  submissions.forEach(submission => {
    console.log(submission)
    submission.answers.forEach(answer => {
      const [subQuestion] = submission.survey.questions.filter(
        question => question.id === answer.questionId
      );

      if (typeof results[answer.questionId] === "undefined") {
        results[answer.questionId] = {
          id: answer.questionId,
          title: subQuestion.title,
          type: subQuestion.answerType,
          answers: {},
          textAnswers: []
        };
      }

      if (results[answer.questionId].type === "CHECKBOX") {
        answer.markedAnswers.forEach(optionId => {
          const [optionData] = subQuestion.answers.filter(
            item => item.id === optionId
          );
          if (
            typeof results[answer.questionId].answers[optionId] === "undefined"
          ) {
            results[answer.questionId].answers[optionId] = {
              name: optionData.title,
              value: 0,
              id: optionId
            };
          }

          results[answer.questionId].answers[optionId].value += 1;
        });
      } else if (results[answer.questionId].type === "RADIOBUTTON") {
        const [optionData] = subQuestion.answers.filter(
          item => item.id === answer.markedAnswers[0]
        );

        if (answer.customAnswer !== "") {
          if (typeof results[answer.questionId].answers.other === "undefined") {
            results[answer.questionId].answers.other = {
              name: "other",
              value: 0,
              id: "other"
            };
          }

          results[answer.questionId].answers.other.value += 1;
          results[answer.questionId].textAnswers.push(answer.customAnswer);
        } else if (answer.markedAnswers.length > 0) {
          if (
            typeof results[answer.questionId].answers[
              answer.markedAnswers[0]
            ] === "undefined"
          ) {
            results[answer.questionId].answers[answer.markedAnswers[0]] = {
              name: optionData.title,
              value: 0,
              id: answer.markedAnswers[0]
            };
          }
          results[answer.questionId].answers[
            answer.markedAnswers[0]
          ].value += 1;
        }
      } else if (results[answer.questionId].type === "DROPDOWN") {
        const [optionData] = subQuestion.answers.filter(
          item => item.id === answer.markedAnswers[0]
        );

        if (
          typeof results[answer.questionId].answers[answer.markedAnswers[0]] ===
          "undefined"
        ) {
          results[answer.questionId].answers[answer.markedAnswers[0]] = {
            name: optionData.title,
            value: 0,
            id: answer.markedAnswers[0]
          };
        }
        results[answer.questionId].answers[answer.markedAnswers[0]].value += 1;
      } else if (results[answer.questionId].type === "RANGE") {
        if (
          typeof results[answer.questionId].answers[answer.customAnswer] ===
          "undefined"
        ) {
          results[answer.questionId].answers[answer.customAnswer] = {
            name: answer.customAnswer,
            answers: 0,
            id: answer.customAnswer
          };
        }
        results[answer.questionId].answers[answer.customAnswer].answers += 1;
        results[answer.questionId].startValue = 1;
        results[answer.questionId].endValue = 100;
        results[answer.questionId].steptValue = 1;
      } else if (results[answer.questionId].type === "INPUT") {
        results[answer.questionId].textAnswers.push(answer.customAnswer);
      }
    });
  });

  return results;
}

export default PrepareSurveyResults;
