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
          timeLimit: 30, 
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
