'use strict';

const catechesis = {
  allQuestions: [


    {
      id: 1,
      question: 'Who made the world?',
      fullAnswer: 'God',
      answerLiteral: '<input type="text" class="answerInput" >',
      userAnswer:'god',
      questionType: 'text'
    },
    
    {
      id: 2,
      question: 'Who is God?',
      fullAnswer: 'God is the Creator of heaven and earth and of all things',
      userAnswer: 'heaven, earth, all things',
      answerLiteral: 'God is the Creator of <input id="1" class="answerInput" type="text"> and <input id="2" class="answerInput"  type="text">, and of  <input id="3" class="answerInput"  type="text">.',
      questionType: 'text'},
    {
      id: 3,
      question: 'What is man?',
      fullAnswer: 'Man is a creature composed of body and soul, and made to the image and likeness of God.',
      answerLiteral: `<div class="answerBlock">Man is a creature composed of [ _________], and made to [ _________]. : <br>
      <input class="answerInput" type="radio" id="answer1" value="1" name="answergroup">
     <label for="answer1">atoms, do good deeds</label><br>
    
     <input class="answerInput" type="radio" id="answer2" value="2" name="answergroup">
     <label for="answer2">matter, to inherit the Earth</label> <br>


     <input class="answerInput" type="radio" id="answer3" value="3" name="answergroup">
     <label for="answer3">body and soul, the image and likeness of God</label> <br>

     <input class="answerInput" type="radio" id="answer4" value="4" name="answergroup">
     <label for="answer4">thoughts, his personal best</label> <br>
     `,
      userAnswer: 3,
      questionType: 'multiplechoice'
    },   

    {  id: 4,
      question: ' Where shall we find the chief truths which the Church teaches?',
      fullAnswer: 'We shall find the chief truths which the Church teaches in the Apostles\' Creed.',
      answerLiteral: `We shall find the chief truths which the Church teaches in the: <br>
                       <input class="answerInput" type="radio" id="answer1" value="1" name="answergroup">
                      <label for="answer1">Bible</label><br>
                     
                      <input class="answerInput" type="radio" id="answer2" value="2" name="answergroup">
                      <label for="answer2">Apostle's Creed</label> <br>
  
  
                      <input class="answerInput" type="radio" id="answer3" value="3" name="answergroup">
                      <label for="answer3">CCD class</label> <br>
  
                      <input class="answerInput" type="radio" id="answer4" value="4" name="answergroup">
                      <label for="answer4">Mass</label> <br>
                      `,
      userAnswer: 2,
      questionType: 'multiplechoice'
    }, 
    
    {
      id: 5,
      question: 'Why did God make you?',
      fullAnswer: 'God made me to know Him, to love Him, and to serve Him in this world, and to be happy with Him forever in the next.',
      answerLiteral: 'God made me to know Him, to love Him, and to serve Him in this world, and to <input class ="answerInput" type="text">.',
      userAnswer: 'be happy with him forever in the next',
      questionType: 'text'
    },
    {
      id: 6,
      question: 'What must we do to save our souls?',
      fullAnswer: 'To save our souls, we must worship God by faith, hope, and charity; that is, we must believe in Him, hope in Him, and love Him with all our heart.',
      answerLiteral: 'To save our souls, we must woship God by  <input class="answerInput" type="text">, <input class="answerInput" type="text">, and <input class="answerInput" type="text">; that is we must <input class="answerInput" type="text">, <input class="answerInput" type="text">, and <input class="answerInput" type="text"> with all our heart.',
      userAnswer: 'faith, hope, charity, believe in him, hope in him, love him',
      questionType: 'text'},
    {
      id: 7,
      question: ' How shall we know the things which we are to believe?',
      fullAnswer: ' We shall know the things which we are to believe from the Catholic Church, through which God speaks to us.',
      answerLiteral: 'We shall know the things which we are to believe from the <input class="answerInput" type="text">, through which God speaks to us.',
      userAnswer: 'catholic church',
      questionType: 'text'
    }, 
    {
      id: 8,
      question: 'What do we mean when we say that God is the Supreme Being?',
      fullAnswer: 'When we say that God is the Supreme Being we mean that He is above all creatures, the self-existing and infinitely perfect Spirit.',
      answerLiteral: 'When we say that God is the Supreme Being we mean that He <input type="text" class="answerInput" >, the self-existing and infinitely perfect Spirit.',
      userAnswer:'is above all creatures',
      questionType: 'text'
    },
    {
      id: 9,
      question: 'What is a spirit?',
      fullAnswer: 'A spirit is a being that has understanding and free will, but no body, and will never die.',
      answerLiteral: `A spirit is a being that has [______}, but no body and will never die] <br>
      <input class="answerInput" type="radio" id="answer1" value="1" name="answergroup">
     <label for="answer1">understanding and free will</label><br>
    
     <input class="answerInput" type="radio" id="answer2" value="2" name="answergroup">
     <label for="answer2">supernatural abilities and telepathy</label> <br>


     <input class="answerInput" type="radio" id="answer3" value="3" name="answergroup">
     <label for="answer3">a soul</label> <br>

     <input class="answerInput" type="radio" id="answer4" value="4" name="answergroup">
     <label for="answer4">God's blessing</label> <br>
     `,
    userAnswer:1,
      questionType: 'multiplechoice'
    },
    
    {
      id: 10,
      question: 'What do we mean when we say that God is self-existing?',
      fullAnswer: 'When we say that God is self-existing we mean that He does not owe His existence to any other being.',
      answerLiteral: 'We mean that He does not <input type="text" class="answerInput" > to any other being',
      userAnswer:'owe his existence',
      questionType: 'text'
    },
    
    {
      id: 11,
      question: 'Who made the world?',
      fullAnswer: 'God',
      answerLiteral: '<input type="text" class="answerInput" >',
      userAnswer:'god',
      questionType: 'text'
    },
    {
      id: 12,
      question: 'Who made the world?',
      fullAnswer: 'God',
      answerLiteral: '<input type="text" class="answerInput" >',
      userAnswer:'god',
      questionType: 'text'
    },
    
  
  
  
  
  
  ],

  currentQuestion: 0

};

