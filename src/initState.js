const initState = {
    test: [
    {
      'topicName': 'Java',
      'tests': [
        { 
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
      'topicName': 'Javascript',
      'tests': [
        { 
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
      'topicName': 'C++',
      'tests': [
        { 
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
      'topicName': 'Quality Assurance',
      'tests': [
        { 
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
      'topicName': 'Python',
      'tests': [
        { 
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
