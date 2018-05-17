'use strict';

const catechesis = {
  allQuestions: [


    {
      id: 1,
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
      id: 3,
      question: 'What is man?',
      fullAnswer: 'Man is a creature composed of body and soul, and made to the image and likeness of God.',
      answerLiteral:`
      <p>Man is a creature composed of <select class="js-answerInput" id="S1">
          <option value="a">atoms</option>
          <option value="b">matter</option>
          <option value="c">body and soul</option>
          <option value="d">thoughts</option>
          </select>, and made to <select class="js-answerInput" id="S2">
                  <option value="a">do good deeds</option>
                  <option value="b">inherit the Earth</option>
                  <option value="c">the image and likeness of God</option>
                  <option value="d">his personal best</option>
                  </select>.</p>
     `,
      userAnswer: 'c, c',
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
      answerLiteral:`<p>To save our souls, we must worship God by <select class="js-answerInput" id="S1">
      <option value="a">prayer, praise, and almsgiving</option>
      <option value="b">attending Mass, going to Confession, studying the Bible</option>
      <option value="c">being generous, thoughtful, and kind</option>
      <option value="d">faith, hope, and charity</option>
      </select>; that is, we must     <select class="js-answerInput" id="S2">
          <option value="a">say the Rosary, sing hymns, and give to the poor</option>
          <option value="b">share, treat others as we wish to be treated, give compliments</option>
          <option value="c">be attentive, contrite, and conscientious</option>
          <option value="d">believe in Him, hope in Him, and love Him</option>
          </select>
  with 
  <select class="js-answerInput" id="S3">
      <option value="a">a joyful heart</option>
      <option value="b">our thoughts</option>
      <option value="c">great sincerity</option>
      <option value="d">all our heart</option>
      </select>
  .'</p>`,
      userAnswer: 'd, d, d',
      questionType: 'select'},
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
      question: 'What is God?',
      fullAnswer: 'God is a spirit infinitely perfect.',
      answerLiteral: 'God is a  <input type="text" class="js-answerInput" > infinitely perfect.',
      userAnswer:'spirit',
      questionType: 'text'
    },
    {
      id: 1,
      question: 'Had God a beginning?',
      fullAnswer: 'God had no beginning; He always was and He always will be.',
      answerLiteral: 'God had no beginning; He always was and <input type="text" class="js-answerInput">.'
      ,
      userAnswer:'He always will be',
      questionType: 'text'
    },
    
    {
      id: 10,
      question: 'Where is God?',
      fullAnswer: 'God is everywhere',
      answerLiteral: `<p>God is:</p> 
                       
      <label for="answer1" class="container">
                      <input class="js-answerInput" type="radio" id="answer1" value="1" name="answergroup">
                      <span class="checkmark"></span>
                      on His throne in heaven</label><br>
                 <label for="answer2" class="container">    
                      <input class="js-answerInput" type="radio" id="answer2" value="2" name="answergroup">
                      <span class="checkmark"></span>
                      in the Blessed Sacrament</label> <br>
  
  <label for="answer3" class="container">
                      <input class="js-answerInput" type="radio" id="answer3" value="3" name="answergroup">
                      <span class="checkmark"></span>
                      in everywhere</label> <br>
  <label for="answer4" class="container">
                      <input class="js-answerInput" type="radio" id="answer4" value="4" name="answergroup">
                      <span class="checkmark"></span>
                      our hearts</label> <br>'`,
      userAnswer:3,
      questionType: 'multiplechoice'
    },
    
    {
      id: 11,
      question: 'If God is everywhere, why do we not see Him?',
      fullAnswer: 'We do not see God, because He is a pure spirit and cannot be seen with bodily eyes',
      answerLiteral: `<p>We do not see God, because He is <select class="js-answerInput" id="S1">
      <option value="a">imaginary</option>
      <option value="b">a pure spirit</option>
      <option value="c">invisible</option>
      <option value="d">far away</option>
      </select>;
          and cannot be seen with bodily eyes
  .</p>`,
      userAnswer:'c',
      questionType: 'select'
    },
    {
      id: 12,
      question: 'Does God see us?',
      fullAnswer: ' God sees us and watches over us.',
      answerLiteral: `<p>God sees us and</p> <br>
                       
      <label for="answer1" class="container">
                      <input class="js-answerInput" type="radio" id="answer1" value="1" name="answergroup">
                      <span class="checkmark"></span>
                      guides our actions</label><br>
                 <label for="answer2" class="container">    
                      <input class="js-answerInput" type="radio" id="answer2" value="2" name="answergroup">
                      <span class="checkmark"></span>
                      judges us</label> <br>
  
  <label for="answer3" class="container">
                      <input class="js-answerInput" type="radio" id="answer3" value="3" name="answergroup">
                      <span class="checkmark"></span>
                      watches over us</label> <br>
  <label for="answer4" class="container">
                      <input class="js-answerInput" type="radio" id="answer4" value="4" name="answergroup">
                      <span class="checkmark"></span>
                      hears our thoughts</label> <br>.`,
      userAnswer:3,
      questionType: 'multiplechoice'
    }, 
    
  
  
  
  
  
  ],

  currentQuestion: 0

};

