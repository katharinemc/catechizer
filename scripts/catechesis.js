'use strict';

const catechesis = {
  allQuestions: [
    {
      id: 1,
      question: 'Who made the world?',
      fullAnswer: 'God',
      userAnswer:'God',
      answerBlocks: 1,
      answerLiteral: '<input type="text" class="answerInput" >'
    },
    
    {
      id: 2,
      question: 'Who is God?',
      fullAnswer: 'God is the Creator of heaven and earth and of all things',
      userAnswer: 'heaven, earth, all things',
      answerLiteral: 'God is the Creator of <input id="1" class="answerInput" type="text"> and <input id="2" class="answerInput"  type="text">, and of  <input id="3" class="answerInput"  type="text">'
    },{
      id: 3,
      question: 'What is man?',
      fullAnswer: 'Man is a creature composed of body and soul, and made to the image and likeness of God.',
      userAnswer:'body and soul, image and likeness',
      answerLiteral: 'Man is a creature composed of <input class="answerInput" type="text">, and made to the <input class="answerInput" type="text"> of God.'
    },    
    
    {
      id: 4,
      question: 'Why did God make you?',
      fullAnswer: 'God made me to know Him, to love Him, and to serve Him in this world, and to be happy with Him forever in the next.',
      userAnswer: 'be happy with Him forever in the next.',
      answerLiteral: 'God made me to know Him, to love Him, and to serve Him in this world, and to <input class ="answerInput" type="text">'
    },
    {
      id: 5,
      question: 'What must we do to save our souls?',
      fullAnswer: 'To save our souls, we must worship God by faith, hope, and charity; that is, we must believe in Him, hope in Him, and love Him with all our heart.',
      answerLiteral: 'To save our souls, we must woship God by  <input class="answerInput" type="text">, <input class="answerInput" type="text">, and <input class="answerInput" type="text">; that is we must <input class="answerInput" type="text">, <input class="answerInput" type="text">, and <input class="answerInput" type="text"> with all our heart.',
      userAnswer: 'faith, hope, charity, believe in Him, hope in Him, love Him'
    },
    {
      id: 6,
      question: ' How shall we know the things which we are to believe?',
      fullAnswer: ' We shall know the things which we are to believe from the Catholic Church, through which God speaks to us.',
      answerLiteral: 'We shall know the things which we are to believe from the <input class="answerInput" type="text">, through which God speaks to us.',
      userAnswer: 'Catholic Church'

    }, 
    
    // In future make this a multiple hoice with radio boxes
    // {  id: 4,
    //   question: ' Where shall we find the chief truths which the Church teaches?',
    //   fullAnswer: 'We shall find the chief truths which the Church teaches in the Apostles\' Creed.',
    //   answerLiteral: `We shall find the chief truths which the Church teaches in the: <br>
    //                  <input type="radio" id="contactChoice1" name="contact" value="phone">
    //                 <label for="contactChoice2">Phone</label> <input class="answerInput" type="text">`,
    //   userAnswer: 'Apostles\' Creed.'
    // }
  
  
  
  
  
  
  
  ],

  currentQuestion: 0

};

