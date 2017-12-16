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
    }
  ]
};

export default initState;
