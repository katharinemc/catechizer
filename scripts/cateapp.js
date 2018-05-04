/* global catechesis */

'use strict';



const cateApp = (function () {

  let allQuestions = catechesis.allQuestions;

  const initialClick = function () {
    $('.regular').on ('click', '.js-click', function(event){
      console.log('initialclick');
      // $( '.js-click').on ('click', function(event){
      event.preventDefault();

      let ourButton = event.currentTarget;
      const paraID = $(ourButton).siblings('p').attr('id');
      const advancedID = parseInt(paraID)+1;
      $(ourButton).closest('.question-section').html(makeQuestion(advancedID));
  
    });
  };
 
  const questionClicks = function () {
    $('.question-section').on ('click', '.js-answerclick', function(event){
      event.preventDefault();
      let ourButton = event.currentTarget;
      const paraID = parseInt($(ourButton).siblings('p').attr('id'));
      let currentQuestion =  catechesis.allQuestions.find(questions => questions.id ===paraID);
      let userAnswer;
   


      if(currentQuestion.questionType === 'text') {
        var userAnswerArray = new Array();
        $('.answerInput').each(function () {
          userAnswerArray.push($(this).val());
          userAnswer=userAnswerArray.join(', ').toLowerCase();
        }); 
      } 
      
      
      else if (currentQuestion.questionType === 'multiplechoice') {
        userAnswer = parseInt($('input[name=answergroup]:checked').val());
      }
      console.log(typeof userAnswer, typeof currentQuestion.userAnswer);

      if(userAnswer=== currentQuestion.userAnswer){
        console.log('correct answer!');
        $(ourButton).closest('.question-section').html(goodJob(paraID));
      } else {
        $(ourButton).closest('.question-section').html(badJob(paraID));
      }

     

    });};

  
  const goodJob = function (paraID) {

    return `      <div class="correct">
      <p id="${paraID}">Good job!  Shall we continue?</p>

    <button class="js-advanceQuestion">Yes Please!</button>
    </div>
      `;
  };

  const advanceQuestion = function () {
    $('.question-section').on ('click', '.js-advanceQuestion', function(event){
      console.log('advance question');
      event.preventDefault();

      let ourButton = event.currentTarget;
      const paraID = $(ourButton).siblings('p').attr('id');
      const advancedID = parseInt(paraID)+1;
      console.log(advancedID);
      $(ourButton).closest('.question-section').html(makeQuestion(advancedID));
  
    });
  };

  const makeQuestion = function (advancedID) {
  
    let newQuestion = catechesis.allQuestions.find(questions => questions.id === advancedID);

    return `
    <div class="regular">
    <p id="${advancedID}">${newQuestion.question}</p>

    <form id="userInputs">  
    ${newQuestion.answerLiteral}
    </form>
    <button type ="submit" class="js-answerclick">Submit Answer</button>
    </div>`;
  };   

  const badJob = function (paraID) {
    console.log('Im in bad!');
    return `      <div class="wrong">
    <p id="${paraID}">Uh-oh! Wrong answer.  Would you like to try again?</p>
    <button class="js-returnQuestion">Yes Please!</button>
    </div>
    `;
  };
  
  const returnQuestion = function () {
    $('.question-section').on ('click', '.js-returnQuestion', function(event){
      console.log('return Question triggered');
      event.preventDefault();

      let ourButton = event.currentTarget;
      const paraID = parseInt($(ourButton).siblings('p').attr('id'));
      console.log(paraID);
      $(ourButton).closest('.question-section').html(makeQuestion(paraID));
    });
  };

  const bindEventListeners = function () {
    initialClick();
    questionClicks();
    advanceQuestion();
    returnQuestion();
  };


  return {
    // loadPage: loadPage,
    bindEventListeners: bindEventListeners,
  };
}());