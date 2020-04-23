export const newData = [
  {
    open: false,
    surveyName: 'My Survey',
    surveyId: '1',
    questions: [
      {
        id: '1',
        question:
          'What is the output of the following expression: "1" + 1 + 5?',
        answerType: 'RADIOBUTTON',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'false'
          },
          {
            id: '2',
            title: '16'
          },
          {
            id: '3',
            title: 'TypeError'
          },
          {
            id: '4',
            title: '115'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '50',
        stepValue: '10'
      },
      {
        id: '2',
        question: 'Which of the following expressions return false?',
        answerType: 'RADIOBUTTON',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: "'' == 0'"
          },
          {
            id: '2',
            title: "'' == []"
          },
          {
            id: '3',
            title: 'true === 1'
          },
          {
            id: '4',
            title: 'true == 1'
          }
        ],
        hasLastInput: true,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '3',
        question: 'Choose all possible titles to create a function',
        answerType: 'CHECKBOX',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'const fn = () => {};'
          },
          {
            id: '2',
            title: 'var fn = function fn() {};'
          },
          {
            id: '3',
            title: 'function fn() {}'
          },
          {
            id: '4',
            title: "const fn = new Function('a', 'return a');"
          },
          {
            id: '5',
            title: 'const fn = a => b => a + b;'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },

      {
        id: '4',
        question: 'question N4',
        answerType: 'DROPDOWN',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '5',
        question: 'question N5',
        answerType: 'RANGE',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '12.5'
      },
      {
        id: '6',
        question: 'Which keyword is used to quit from the loop?',
        answerType: 'INPUT',
        inputType: 'text',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '7',
        question: 'Your born date',
        answerType: 'INPUT',
        inputType: 'date',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '8',
        question: 'How old are you?',
        answerType: 'INPUT',
        inputType: 'number',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      }
    ]
  },
  {
    open: false,
    surveyName: 'His Survey',
    surveyId: '2',
    questions: [
      {
        id: '1',
        question:
          'What is the output of the following expression: "1" + 1 + 5?',
        answerType: 'RADIOBUTTON',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'false'
          },
          {
            id: '2',
            title: '16'
          },
          {
            id: '3',
            title: 'TypeError'
          },
          {
            id: '4',
            title: '115'
          }
        ],
        hasLastInput: true,
        startValue: '0',
        endValue: '50',
        stepValue: '10'
      },
      {
        id: '2',
        question: 'Which of the following expressions return false?',
        answerType: 'RADIOBUTTON',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: "'' == 0'"
          },
          {
            id: '2',
            title: "'' == []"
          },
          {
            id: '3',
            title: 'true === 1'
          },
          {
            id: '4',
            title: 'true == 1'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '3',
        question: 'Choose all possible titles to create a function',
        answerType: 'CHECKBOX',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'const fn = () => {};'
          },
          {
            id: '2',
            title: 'var fn = function fn() {};'
          },
          {
            id: '3',
            title: 'function fn() {}'
          },
          {
            id: '4',
            title: "const fn = new Function('a', 'return a');"
          },
          {
            id: '5',
            title: 'const fn = a => b => a + b;'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },

      {
        id: '4',
        question: 'question N4',
        answerType: 'DROPDOWN',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '5',
        question: 'question N5',
        answerType: 'RANGE',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '6',
        question: 'Which keyword is used to quit from the loop?',
        answerType: 'INPUT',
        inputType: 'text',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '7',
        question: 'Your born date',
        answerType: 'INPUT',
        inputType: 'date',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '8',
        question: 'How old are you?',
        answerType: 'INPUT',
        inputType: 'number',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      }
    ]
  },
  {
    open: false,
    surveyName: 'My Survey',
    surveyId: '3',
    questions: [
      {
        id: '1',
        question:
          'What is the output of the following expression: "1" + 1 + 5?',
        answerType: 'RADIOBUTTON',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'false'
          },
          {
            id: '2',
            title: '16'
          },
          {
            id: '3',
            title: 'TypeError'
          },
          {
            id: '4',
            title: '115'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '50',
        stepValue: '10'
      },
      {
        id: '2',
        question: 'Which of the following expressions return false?',
        answerType: 'RADIOBUTTON',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: "'' == 0'"
          },
          {
            id: '2',
            title: "'' == []"
          },
          {
            id: '3',
            title: 'true === 1'
          },
          {
            id: '4',
            title: 'true == 1'
          }
        ],
        hasLastInput: true,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '3',
        question: 'Choose all possible titles to create a function',
        answerType: 'CHECKBOX',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'const fn = () => {};'
          },
          {
            id: '2',
            title: 'var fn = function fn() {};'
          },
          {
            id: '3',
            title: 'function fn() {}'
          },
          {
            id: '4',
            title: "const fn = new Function('a', 'return a');"
          },
          {
            id: '5',
            title: 'const fn = a => b => a + b;'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },

      {
        id: '4',
        question: 'question N4',
        answerType: 'DROPDOWN',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '5',
        question: 'question N5',
        answerType: 'RANGE',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '12.5'
      },
      {
        id: '6',
        question: 'Which keyword is used to quit from the loop?',
        answerType: 'INPUT',
        inputType: 'text',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '7',
        question: 'Your born date',
        answerType: 'INPUT',
        inputType: 'date',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '8',
        question: 'How old are you?',
        answerType: 'INPUT',
        inputType: 'number',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      }
    ]
  },
  {
    open: false,
    surveyName: 'His Survey',
    surveyId: '4',
    questions: [
      {
        id: '1',
        question:
          'What is the output of the following expression: "1" + 1 + 5?',
        answerType: 'RADIOBUTTON',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'false'
          },
          {
            id: '2',
            title: '16'
          },
          {
            id: '3',
            title: 'TypeError'
          },
          {
            id: '4',
            title: '115'
          }
        ],
        hasLastInput: true,
        startValue: '0',
        endValue: '50',
        stepValue: '10'
      },
      {
        id: '2',
        question: 'Which of the following expressions return false?',
        answerType: 'RADIOBUTTON',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: "'' == 0'"
          },
          {
            id: '2',
            title: "'' == []"
          },
          {
            id: '3',
            title: 'true === 1'
          },
          {
            id: '4',
            title: 'true == 1'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '3',
        question: 'Choose all possible titles to create a function',
        answerType: 'CHECKBOX',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'const fn = () => {};'
          },
          {
            id: '2',
            title: 'var fn = function fn() {};'
          },
          {
            id: '3',
            title: 'function fn() {}'
          },
          {
            id: '4',
            title: "const fn = new Function('a', 'return a');"
          },
          {
            id: '5',
            title: 'const fn = a => b => a + b;'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },

      {
        id: '4',
        question: 'question N4',
        answerType: 'DROPDOWN',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '5',
        question: 'question N5',
        answerType: 'RANGE',
        inputType: undefined,
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '6',
        question: 'Which keyword is used to quit from the loop?',
        answerType: 'INPUT',
        inputType: 'text',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '7',
        question: 'Your born date',
        answerType: 'INPUT',
        inputType: 'date',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      },
      {
        id: '8',
        question: 'How old are you?',
        answerType: 'INPUT',
        inputType: 'number',
        answers: [
          {
            id: '1',
            title: 'yes'
          },
          {
            id: '2',
            title: 'nono'
          },
          {
            id: '3',
            title: 'ohowefwef'
          }
        ],
        hasLastInput: false,
        startValue: '0',
        endValue: '100',
        stepValue: '10'
      }
    ]
  }
];
