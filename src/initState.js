const initState = {
  users: [
    {
      userId: 1,
      userIsAdmin: 'false',
      userLogin: '1',
      userPass: '1',
      userName: 'User Name',
      userTests: [
        {
          testTopicId: 0,
          nameId: 0,
          name: 'Java Basics',
          testDate: '',
          testStatus: 'pass', // last test status
          testAttempts: 2,
          testTimeSpent: '300'  // in seconds
        },
        {
          testTopicId: 0,
          nameId: 4,
          name: 'C++ Basics',
          testDate: '',
          testStatus: 'fail',
          testAttempts: 1,
          testTimeSpent: 300  // in seconds
        },
      ],
    }
  ],
  test: [
  {                             // test Group
    'topicId': '0', 
    'topicName': 'Java',
    'tests': [
      {                         // nameId
        nameId: 0,
        name: 'Java Basics',
        timeLimit: 10, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is Java?',
            answer: [
              'first var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first var']
          },
          {
            type: 'radio', 
            question: 'what is closure?',
            answer: [
              'answer no 1',
              'answer no 2', 
              'answer no 3',
              'answer no 4'
            ],
            correctAnswer: ['answer no 1']
          },    
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first var', 'third var']
          }
        ]
      },
      { 
        nameId: 1,
        name: 'Java Advanced',
        timeLimit: 20, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is Java?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['third var']  
          },  
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var', 'third var']
          }
        ]
      }
    ]
  },
  {
    'topicId': '1',
    'topicName': 'Javascript',
    'tests': [
      { 
        nameId: 2,
        name: 'Javascript Basics',
        timeLimit: 300, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 
              'Что такое тернарный оператор?',
            answer: [
              'Это цикл',
              'Это условная конструкция',              
              'Это ключевое слово'
            ],
            correctAnswer: ['Это условная конструкция']
          },  
          {
            type: 'checkbox', 
            question: 'Какие циклические конструкции есть в JavaScript?',
            answer: [
              'for()',
              'while(){}', 
              'do {} while()',
              'while {} do()'
            ],
            correctAnswer: ['for()', 'while(){}', 'do {} while()']
          },  
          {
            type: 'radio', 
            question: 'Что такое условная конструкция?',
            answer: [
              'Блок кода, который выполняется определенное количество раз',
              'Блок кода, который выполняется при определенном условии', 
              'Это функция',
              'Это массив'
            ],
            correctAnswer: ['Блок кода, который выполняется при определенном условии']
          },  
          {
            type: 'radio', 
            question: 'Какое свойство возвращает длину массива?',
            answer: [
              'write',
              'insert', 
              'length',
              'return'
            ],
            correctAnswer: ['length']
          },  
          {
            type: 'radio', 
            question: 'Ассоциативный массив – это массив:',
            answer: [
              'где данные хранятся по номерам',
              'где данные хранятся по произвольному ключу', 
              'такого массива не существует',
              'где данные хранятся по значениям'
            ],
            correctAnswer: ['где данные хранятся по произвольному ключу']
          },  
          {
            type: 'radio', 
            question: 'Требуется вернуть фрагмент массива или подмассив. Какой метод для этого следует вызвать',
            answer: [
              'join();',
              'reverse();', 
              'slice();',
              'push();'
            ],
            correctAnswer: ['slice();']
          },  
          {
            type: 'radio', 
            question: 'Выполнен код: var a = Array(8); Какой массив в результате будет создан?',
            answer: [
              'Массив на один элемент с числом «8»',
              'Пустой массив на «8» элементов', 
              'Массив с «8» элементов заполненный числами «8»',
              'Так создавать массив нельзя'
            ],
            correctAnswer: ['Пустой массив на «8» элементов']
          }
        ]
      },
      { 
        nameId: 3,
        name: 'Javascript Advanced',
        timeLimit: 20, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is Javascript?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['third var']  
          },  
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var', 'third var']
          }
        ]
      }
    ]
  },
  {
    'topicId': '2',
    'topicName': 'C++',
    'tests': [
      { 
        nameId: 4,
        name: 'C++ Basics',
        timeLimit: 30, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is C++?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var'  ]
          },  
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var', 'third var']
          }
        ]
      },
      { 
        nameId: 5,
        name: 'C++ Advanced',
        timeLimit: 20, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is C++?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['third var']  
          },  
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var', 'third var']
          }
        ]
      }
    ]
  },
  {
    'topicId': '3',
    'topicName': 'Quality Assurance',
    'tests': [
      { 
        nameId: 6,
        name: 'Quality Assurance Basics',
        timeLimit: 30, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is Quality Assurance means?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var'  ]
          },  
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var', 'third var']
          }
        ]
      },
      { 
        nameId: 7,
        name: 'Quality Assurance Advanced',
        timeLimit: 20, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is Quality Assurance?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['third var']  
          },  
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var', 'third var']
          }
        ]
      }
    ]
  },
  {
    'topicId': '4',
    'topicName': 'Python',
    'tests': [
      { 
        nameId: 8,
        name: 'Python Basics',
        timeLimit: 30, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is Python means?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var'  ]
          },  
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var', 'third var']
          }
        ]
      },
      { 
        nameId: 9,
        name: 'Python Advanced',
        timeLimit: 20, 
        minTestScore: 0.7,
        questions: [ 
          {
            type: 'radio', 
            question: 'what is Python?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['third var']  
          },  
          {
            type: 'checkbox', 
            question: 'who is Jesus?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['first  var', 'third var']
          }
        ]
      }
    ]
  },
]
};

export default initState;
