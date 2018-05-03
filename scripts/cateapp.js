/* global catechesis */

'use strict';

const cateApp = (function () {

  let allQuestions = catechesis.allQuestions;
  console.log(allQuestions);
    
  const initialClick = function () {
    $('.question-section').on ('click', '.js-click', function(event){
    // $( '.js-click').on ('click', function(event){
      event.preventDefault();

      let ourButton = event.currentTarget;
      const paraID = $(ourButton).siblings('p').attr('id');
      $(ourButton).parent('.question-section').html(makeQuestion(paraID));
  
    });
  };
 
  const questionClicks = function () {
    $('.question-section').on ('click', '.js-answerclick', function(event){
      console.log('subsequent click!');
      event.preventDefault();
      let ourButton = event.currentTarget;
      const paraID = parseInt($(ourButton).siblings('p').attr('id'));
      let currentQuestion =  catechesis.allQuestions.find(questions => questions.id ===paraID);
  

      var userAnswerArray = new Array();
      $('.answerInput').each(function () {
        userAnswerArray.push($(this).val());
      }); 

      console.log(`InputAnswer ${userAnswerArray.join(', ')}, provided answer ${currentQuestion.userAnswer}`);

      if(userAnswerArray.join(', ') === currentQuestion.userAnswer){
     
        console.log('correct answer!');
        $(ourButton).parent('.question-section').html(goodJob(paraID));
      } else {
        console.log('wrong answer');
      }
     

    });};

  const goodJob = function (paraID) {
    console.log('Im in goodJob!');

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
      $(ourButton).closest('.question-section').html(makeQuestion(paraID));
  
    });
  };

  const makeQuestion = function (paraID) {
    let newID = parseInt(paraID)+1;
    let newQuestion = catechesis.allQuestions.find(questions => questions.id === newID);
    catechesis.currentQuestion = newID;
    return `<p id="${newID}">${newQuestion.question}</p>

    <form id="userInputs">  
    ${newQuestion.answerLiteral}
    </form>
    <button type ="submit" class="js-answerclick">Submit Answer</button>`;
  };   

  const bindEventListeners = function () {
    initialClick();
    questionClicks();
    advanceQuestion();
  };


  return {
    // loadPage: loadPage,
    bindEventListeners: bindEventListeners,
  };
}());