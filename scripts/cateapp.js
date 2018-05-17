/* global catechesis */

'use strict';



const cateApp = (function () {
  let allQuestions = catechesis.allQuestions;

  const initialClick = function () {
    $('.regular').on('click', '.js-click', function (event) {
      console.log('initialclick');
      // $( '.js-click').on ('click', function(event){
      event.preventDefault();

      let ourButton = event.currentTarget;
      const paraID = $(ourButton).siblings('p').attr('id');
      const advancedID = parseInt(paraID) + 1;
      $(ourButton).closest('.js-qs').html(makeQuestion(advancedID));
  
    });
  };

  const questionClicks = function () {
    $('.js-qs').on('click', '.js-answerclick', function (event) {
      console.log('shaboom');
      event.preventDefault();
      let ourButton = event.currentTarget;
      const paraID = parseInt($(ourButton).siblings('p').attr('id'));
      let currentQuestion = catechesis.allQuestions.find(questions => questions.id === paraID);

      var userAnswer;

      if (currentQuestion.questionType === 'text') {
        let userAnswerArray = new Array();
        $('.js-answerInput').each(function () {
          userAnswerArray.push($(this).val());
          userAnswer = userAnswerArray.join(', ').toLowerCase();
        }); 
      } else if (currentQuestion.questionType === 'select') {
        let userAnswerArray = new Array();
        $( '.js-answerInput option:selected' ).each(function () {
          userAnswerArray.push($(this).val());
          userAnswer = userAnswerArray.join(', ').toLowerCase();
        });
      }

      else if (currentQuestion.questionType === 'multiplechoice') {
        userAnswer = parseInt($('input[name=answergroup]:checked').val());
      }

      console.log(userAnswer, currentQuestion.answer);
      $(ourButton).closest('.js-qs').removeClass('question-section');

      if (userAnswer === currentQuestion.userAnswer) {  
        $(ourButton).closest('.js-qs').toggleClass('correct');
        $(ourButton).closest('.js-qs').html(goodJob(paraID));
      } else {
        $(ourButton).closest('.js-qs').toggleClass('wrong');
        $(ourButton).closest('.js-qs').html(badJob(paraID));
      }
    });};

  const goodJob = function (paraID) {
    return ` 
      <p id="${paraID}">Good job!  Shall we continue?</p>

    <button class="js-advanceQuestion advanceQuestion">Yes Please!</button>
   
      `;
  };

  const advanceQuestion = function () {
    $('.js-qs').on('click', '.js-advanceQuestion', function (event) {
      console.log('advance question');
      event.preventDefault();

      let ourButton = event.currentTarget;
      const paraID = $(ourButton).siblings('p').attr('id');
      const advancedID = parseInt(paraID) + 1;
      console.log(advancedID);

      $(ourButton).closest('.js-qs').removeClass('correct');
      $(ourButton).closest('.js-qs').addClass('question-section');
      $(ourButton).closest('.js-qs').html(makeQuestion(advancedID));
    });
  };

  const makeQuestion = function (advancedID) {
    let newQuestion = catechesis.allQuestions.find(questions => questions.id === advancedID);

    return `
    <div class="regular">
    <p class="asker" id="${advancedID}">${newQuestion.question}</p>

    <form id="userInputs answerBlock">  
    ${newQuestion.answerLiteral}
    </form>
    <button type ="submit" class="js-answerclick">Submit Answer</button>
    </div>`;
  };

  const badJob = function (paraID) {
    console.log('Im in bad!');
    return `      
    <p id="${paraID}">Uh-oh! Wrong answer.  Would you like to try again?</p>
    <button class="js-returnQuestion returnQuestion">Yes Please!</button>

    `;
  };

  const returnQuestion = function () {
    $('.js-qs').on('click', '.js-returnQuestion', function (event) {
      console.log('return Question triggered');
      event.preventDefault();

      let ourButton = event.currentTarget;
      const paraID = parseInt($(ourButton).siblings('p').attr('id'));
      console.log(paraID);
      $(ourButton).closest('.js-qs').removeClass('wrong');
      $(ourButton).closest('.js-qs').addClass('question-section');
      $(ourButton).closest('.js-qs').html(makeQuestion(paraID));
    });
  };

  const whyClick = function () {
    $('#why').on('click', function () {
      $(event.currentTarget).closest('.js-qs').addClass('explanation');
      $(event.currentTarget).closest('.js-qs').html(whyText);

    });
  };

  const whyText =  `<p>The Baltimore Catechism was widely used in Catholic schools from its first publication in 1885 until the mid-1960s.</p><p>  Generations of Catholics were familiar with it's question and answer format and concise approach to complex philosophical questions.</p>

  <p>This app is intended to share that tradition with a new audience for education and entertainment.</p><p>  The questions are primarily drawn from the 1891 version of the Baltimore Catechism #3. In some places, answers may be a a short phrase.  Please note: spelling, word choice, and word order count.  Additional questions will be added as time permits.</p><br><br>
  <p class="explain"><a href="./">Back</a></p>
  `;


  const bindEventListeners = function () {
    initialClick();
    questionClicks();
    advanceQuestion();
    returnQuestion();
    whyClick();
  };

  return {
    // loadPage: loadPage,
    bindEventListeners: bindEventListeners
  };
}());
