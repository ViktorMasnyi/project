const initState = {
  users: [
    {
      userId: 1,
      userIsAdmin: 'false',
      userLogin: 'warrior',
      userPass: 'password',
      userName: 'Black Warrior',
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
        timeLimit: 300, 
        minTestScore: 0.7,
        imageUrl: 'img/java-starter-icon.png',
        questions: [ 
          {
            type: 'radio', 
            question: '2x4?',
            answer: [
              '8',
              '14', 
              '6'
            ],
            correctAnswer: ['8']
          },
          {
            type: 'radio', 
            question: '6x8?',
            answer: [
              '24',
              '42', 
              '48',
              '52'
            ],
            correctAnswer: ['48']
          },    
          {
            type: 'checkbox', 
            question: '5x9?',
            answer: [
              '64',
              '45', 
              '9x5'
            ],
            correctAnswer: ['45', '9x5']
          }
        ]
      },
      { 
        nameId: 1,
        name: 'Java Advanced',
        timeLimit: 600, 
        minTestScore: 0.7,
        imageUrl: 'img/java_prof-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
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
        timeLimit: 900, 
        minTestScore: 0.7,
        imageUrl: 'img/javascript-essential-icon.png',
        questions: [ 
          {
            type: 'radio', 
            question: 
              'What is ternary operator?',
            answer: [
              'this is the cycle',
              'this is the condition statement',              
              'this is the keyword'
            ],
            correctAnswer: ['this is the condition statement']
          },  
          {
            type: 'checkbox', 
            question: 'What types of cycles are available in JavaScript?',
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
            question: 'What is conditional statement?',
            answer: [
              'Block of code, that can be executed many times',
              'Block of code, that will be executed on certain condition', 
              'This is function',
              'This is array'
            ],
            correctAnswer: ['Block of code, that will be executed on certain condition']
          },  
          {
            type: 'radio', 
            question: 'What property returns array length?',
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
            question: 'Associative array, it is array that:',
            answer: [
              'stores data with numbered indexes.',
              'stores data with on an arbitrary key', 
              'does not exists',
              'stores data by its value'
            ],
            correctAnswer: ['stores data with on an arbitrary key']
          },  
          {
            type: 'radio', 
            question: 'You need to return part of a given array. What method should be used in this case?',
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
            question: 'Consider code: var a = Array(8); What will be result array?',
            answer: [
              'Array with one element with value of "8"',
              'Array with "8" empty elements', 
              'Array with "8" elements, each element has value of "8"',
              'There in not valid way to define array'
            ],
            correctAnswer: ['Array with "8" empty elements']
          }
        ]
      },
      { 
        nameId: 3,
        name: 'Javascript Advanced',
        timeLimit: 1500, 
        minTestScore: 0.7,
        imageUrl: 'img/javascript-advanced-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
          }
        ]
      }
    ]
  },
  {
    'topicId': '2',
    'topicName': 'C#',
    'tests': [
      { 
        nameId: 4,
        name: 'C# Basics',
        timeLimit: 600, 
        minTestScore: 0.7,
        imageUrl: 'img/csharp-starter-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
          }
        ]
      },
      { 
        nameId: 5,
        name: 'C# Advanced',
        timeLimit: 600, 
        minTestScore: 0.7,
        imageUrl: 'img/csharp-essential-icon.png',
        questions: [ 
          {
            type: 'radio', 
            question: 'what is C#?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['third var']  
          },  
          {
            type: 'checkbox', 
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
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
        timeLimit: 10, 
        minTestScore: 0.7,
        imageUrl: 'img/qa-start-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
          }
        ]
      },
      { 
        nameId: 7,
        name: 'Quality Assurance Advanced',
        timeLimit: 1200, 
        minTestScore: 0.7,
        imageUrl: 'img/qa-start-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
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
        timeLimit: 600, 
        minTestScore: 0.7,
        imageUrl: 'img/python-starter-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
          }
        ]
      },
      { 
        nameId: 9,
        name: 'Python Advanced',
        timeLimit: 3000, 
        minTestScore: 0.7,
        imageUrl: 'img/python-essential-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
          }
        ]
      }
    ]
  },
  {
    'topicId': '5',
    'topicName': 'HTML & CSS',
    'tests': [
      { 
        nameId: 10,
        name: 'HTML & CSS',
        timeLimit: 900, 
        minTestScore: 0.7,
        imageUrl: 'img/html-and-css-renewed-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
          }
        ]
      },
      { 
        nameId: 11,
        name: 'HTML5 & CSS3',
        timeLimit: 2000, 
        minTestScore: 0.7,
        imageUrl: 'img/html5-and-css3-icon.png',
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
            question: 'What value lays in the middle?',
            answer: [
              'first  var',
              'second var', 
              'third var'
            ],
            correctAnswer: ['second var']
          }
        ]
      }
    ]
  },
]
};

export default initState;
