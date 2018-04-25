/* global catechesis */

'use strict';
console.log('cateapp running');
const cateApp = (function () {

  let allQuestions = catechesis.allQuestions;
  console.log(allQuestions);
    
  const initialClick = function () {
    // $('.question-section').on ('click', '.js-click', function(event){
    $( '.js-click').on ('click', function(event){
      event.preventDefault();
      console.log(event.currentTarget);
      let ourButton = event.currentTarget;
      const paraID = $(ourButton).siblings('p').attr('id');
      $(ourButton).parent('.question-section').html(makeQuestion(paraID));
  
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
  // Submits via button - works for single inputs
  const subsequentClicks = function () {
    $('.question-section').on ('click', '.js-answerclick', function(event){
      event.preventDefault();
      let ourButton = event.currentTarget;
      const paraID = parseInt($(ourButton).siblings('p').attr('id'));
      let userAnswer = $('input:text').val();
      let currentQuestion =  catechesis.allQuestions.find(questions => questions.id ===paraID);
      if (userAnswer === currentQuestion.answer) {
        console.log('right answer!');
        $(ourButton).parent('.question-section').html(makeQuestion(paraID));
      }else {
        console.log(`Your answer ${userAnswer}, correct answer ${currentQuestion.answer}`);
      }  
    });};
  






  const bindEventListeners = function () {
    initialClick();
    subsequentClicks();

  };


  return {
    // loadPage: loadPage,
    bindEventListeners: bindEventListeners,
  };
}());