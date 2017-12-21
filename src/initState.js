const initState = {
    test: [
    {
      'topicId': '0',
      'topicName': 'Java',
      'tests': [
        { 
          nameId: 0,
          name: 'Java Basics',
          timeLimit: 30, 
          questions: [ 
            {
              type: 'single', 
              question: 'what is Java?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var']
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
            }
          ]
        },
        { 
          nameId: 1,
          name: 'Java Advanced',
          timeLimit: 20, 
          questions: [ 
            {
              type: 'single', 
              question: 'what is Java?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['third var']  
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
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
          questions: [ 
            {
              type: 'single', 
              question: 'what is Javascript?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var'  ]
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
            }
          ]
        },
        { 
          nameId: 3,
          name: 'Javascript Advanced',
          timeLimit: 20, 
          questions: [ 
            {
              type: 'single', 
              question: 'what is Javascript?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['third var']  
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
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
          questions: [ 
            {
              type: 'single', 
              question: 'what is C++?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var'  ]
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
            }
          ]
        },
        { 
          nameId: 5,
          name: 'C++ Advanced',
          timeLimit: 20, 
          questions: [ 
            {
              type: 'single', 
              question: 'what is C++?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['third var']  
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
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
          questions: [ 
            {
              type: 'single', 
              question: 'what is Quality Assurance means?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var'  ]
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
            }
          ]
        },
        { 
          nameId: 7,
          name: 'Quality Assurance Advanced',
          timeLimit: 20, 
          questions: [ 
            {
              type: 'single', 
              question: 'what is Quality Assurance?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['third var']  
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
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
          questions: [ 
            {
              type: 'single', 
              question: 'what is Python means?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var'  ]
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
            }
          ]
        },
        { 
          nameId: 9,
          name: 'Python Advanced',
          timeLimit: 20, 
          questions: [ 
            {
              type: 'single', 
              question: 'what is Python?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['third var']  
            },  
            {
              type: 'multy', 
              question: 'who is Jesus?',
              ansVariant1: 'first  var',
              ansVariant2: 'second var', 
              ansVariant3: 'third var',
              answer: ['first  var', 'third var']
            }
          ]
        }
      ]
    },
  ]
};

export default initState;
