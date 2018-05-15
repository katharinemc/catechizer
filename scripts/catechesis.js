'use strict';

const catechesis = {
  allQuestions: [


    {
      id: 0,
      question: 'Who made the world?',
      fullAnswer: 'God',
      answerLiteral: `
      <input type="text" class="js-answerInput" >
      
      `,
      userAnswer:'god',
      questionType: 'text'
    },
    
    {
      id: 2,
      question: 'Who is God?',
      fullAnswer: 'God is the Creator of heaven and earth and of all things',
      userAnswer: 'heaven, earth, all things',
      answerLiteral: `
      God is the Creator of <input id="1" class="js-answerInput" type="text"> and <input id="2" class="js-answerInput"  type="text">, and of  <input id="3" class="js-answerInput"  type="text">.
      `
      ,
      questionType: 'text'},
    {
      id: 1,
      question: 'What is man?',
      fullAnswer: 'Man is a creature composed of body and soul, and made to the image and likeness of God.',
      answerLiteral:`
      <p>Man is a creature composed of <select class="js-answerInput" id="S1">
          <option value="1">atoms</option>
          <option value="2">matter</option>
          <option value="3">body and soul</option>
          <option value="4">thoughts</option>
          </select>, and made to <select class="js-answerInput" id="S2">
                  <option value="1">do good deeds</option>
                  <option value="2">inherit the Earth</option>
                  <option value="3">the image and likeness of God</option>
                  <option value="4">his personal best</option>
                  </select>.</p>
     `,
      userAnswer: '33',
      questionType: 'select'
    },   

    {  id: 4,
      question: ' Where shall we find the chief truths which the Church teaches?',
      fullAnswer: 'We shall find the chief truths which the Church teaches in the Apostles\' Creed.',
      answerLiteral: `<p>We shall find the chief truths which the Church teaches in the:</p> <br>
                       
      <label for="answer1" class="container">
                      <input class="js-answerInput" type="radio" id="answer1" value="1" name="answergroup">
                      <span class="checkmark"></span>
                      Bible</label><br>
                 <label for="answer2" class="container">    
                      <input class="js-answerInput" type="radio" id="answer2" value="2" name="answergroup">
                      <span class="checkmark"></span>
                      Apostle's Creed</label> <br>
  
  <label for="answer3" class="container">
                      <input class="js-answerInput" type="radio" id="answer3" value="3" name="answergroup">
                      <span class="checkmark"></span>
                      CCD class</label> <br>
  <label for="answer4" class="container">
                      <input class="js-answerInput" type="radio" id="answer4" value="4" name="answergroup">
                      <span class="checkmark"></span>
                      Mass</label> <br>
                      `,
      userAnswer: 2,
      questionType: 'multiplechoice'
    }, 
    
    {
      id: 5,
      question: 'Why did God make you?',
      fullAnswer: 'God made me to know Him, to love Him, and to serve Him in this world, and to be happy with Him forever in the next.',
      answerLiteral: 'God made me to know Him, to love Him, and to serve Him in this world, and to <input class ="js-answerInput" type="text">.',
      userAnswer: 'be happy with him forever in the next',
      questionType: 'text'
    },
    {
      id: 6,
      question: 'What must we do to save our souls?',
      fullAnswer: 'To save our souls, we must worship God by faith, hope, and charity; that is, we must believe in Him, hope in Him, and love Him with all our heart.',
      answerLiteral: `'To save our souls, we must worship God by [__________________]; that is, we must [__________________] with[___________________].':</p> <br>
                       
      <label for="answer1" class="container">
                      <input class="js-answerInput" type="radio" id="answer1" value="1" name="answergroup">
                      <span class="checkmark"></span>
                      [prayer, praise, and almsgiving], [say the Rosary, sing hymns, and give to the poor], [a joyful heart]</label><br>
                 <label for="answer2" class="container">    
                      <input class="js-answerInput" type="radio" id="answer2" value="2" name="answergroup">
                      <span class="checkmark"></span>
                      [attending Mass, going to Confession, studying the Bible], [be attentive, contrite, and conscientious], [our thoughts]</label> <br>
  
  <label for="answer3" class="container">
                      <input class="js-answerInput" type="radio" id="answer3" value="3" name="answergroup">
                      <span class="checkmark"></span>
                      [being generous, thoughtful, and kind], [share, treat others as we wish to be treated, give compliments], [great sincerity]</label> <br>
  <label for="answer4" class="container">
                      <input class="js-answerInput" type="radio" id="answer4" value="4" name="answergroup">
                      <span class="checkmark"></span>
                      [faith, hope and charity], [believe in him, hope in him, and love him], [all our heart]</label> <br>
                      `,
      userAnswer: 4,
      questionType: 'multiplechoice'},
    {
      id: 7,
      question: ' How shall we know the things which we are to believe?',
      fullAnswer: ' We shall know the things which we are to believe from the Catholic Church, through which God speaks to us.',
      answerLiteral: 'We shall know the things which we are to believe from the <input class="js-answerInput" type="text">, through which God speaks to us.',
      userAnswer: 'catholic church',
      questionType: 'text'
    }, 
    {
      id: 8,
      question: 'What do we mean when we say that God is the Supreme Being?',
      fullAnswer: 'When we say that God is the Supreme Being we mean that He is above all creatures, the self-existing and infinitely perfect Spirit.',
      answerLiteral: 'When we say that God is the Supreme Being we mean that He <input type="text" class="js-answerInput" >, the self-existing and infinitely perfect Spirit.',
      userAnswer:'is above all creatures',
      questionType: 'text'
    },
    {
      id: 9,
      question: 'What is a spirit?',
      fullAnswer: 'A spirit is a being that has understanding and free will, but no body, and will never die.',
      answerLiteral: `A spirit is a being that has [______}, but no body and will never die] <br>

      <label for="answer1" class="container">
      <input class="js-answerInput" type="radio" id="answer1" value="1" name="answergroup">
             <span class="checkmark"></span>
    understanding and free will</label><br>

     <label for="answer2" class="container">
     <input class="js-answerInput" type="radio" id="answer2" value="2" name="answergroup">
            <span class="checkmark"></span>
   supernatural abilities and telepathy</label> <br>

     <label for="answer3" class="container">
     <input class="js-answerInput" type="radio" id="answer3" value="3" name="answergroup">
            <span class="checkmark"></span>
    a soul</label> <br>

     <label for="answer4" class="container">
     <input class="js-answerInput" type="radio" id="answer4" value="4" name="answergroup">
            <span class="checkmark"></span>
    God's blessing</label> <br>
     `,
    userAnswer:1,
      questionType: 'multiplechoice'
    },
    
    {
      id: 10,
      question: 'What do we mean when we say that God is self-existing?',
      fullAnswer: 'When we say that God is self-existing we mean that He does not owe His existence to any other being.',
      answerLiteral: 'We mean that He does not <input type="text" class="js-answerInput" > to any other being',
      userAnswer:'owe his existence',
      questionType: 'text'
    },
    
    {
      id: 11,
      question: 'Who made the world?',
      fullAnswer: 'God',
      answerLiteral: '<input type="text" class="js-answerInput" >',
      userAnswer:'god',
      questionType: 'text'
    },
    {
      id: 12,
      question: 'Who made the world?',
      fullAnswer: 'God',
      answerLiteral: '<input type="text" class="js-answerInput" >',
      userAnswer:'god',
      questionType: 'text'
    },
    
  
  
  
  
  
  ],

  currentQuestion: 0

};

