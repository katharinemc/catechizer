'use strict';

const catechesis = {
  allQuestions: [
    {
      id: 1,
      question: 'Who made the world?',
      fullAnswer: 'God',
      answer:'God',
      answerType: 'singleInput',
      answerLiteral: '<input type="text">'
    },
    
    {
      id: 2,
      question: 'Who is God?',
      fullAnswer: 'God is the Creator of heaven and earth and of all things',
      answer: ['heaven', 'earth', 'all things'],
      answerType: 'threeInput',
      answerLiteral: 'God is the Creater of <input data-id="1" type="text"> and <input data-id="2" type="text">, and of all <input data-id="3" type="text">'
    },{
      id: 3,
      question: 'What is man?',
      fullAnswer: 'Man is a creature composed of body and soul, and made to the image and likeness of God.'
    },    
    
    {
      id: 4,
      question: 'Why did God make you?',
      fullAnswer: 'God made me to know Him, to love Him, and to serve Him in this world, and to be happy with Him forever in the next.',
      answer: 'be happy with Him forever in the next.',
      answerLiteral: 'God made me to know Him, to love Him, and to serve Him in this world, and to <input type="text">'
    },
    {
      id: 5,
      question: 'What must we do to save our souls?',
      fullAnswer: 'To save our souls, we must worship God by faith, hope, and charity; that is, we must believe in Him, hope in Him, and love Him with all our heart.',

    },
    {
      id: 6,
      question: ' How shall we know the things which we are to believe?',
      fullAnswer: ' We shall know the things which we are to believe from the Catholic Church, through which God speaks to us.',

    },  {
      id: 7,
      question: ' Where shall we find the chief truths which the Church teaches?',
      fullAnswer: 'We shall find the chief truths which the Church teaches in the Apostles\' Creed.',

    }
  
  
  
  
  
  
  
  ],

  currentQuestion: 0

};

