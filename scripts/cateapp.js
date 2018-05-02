/* global catechesis */

'use strict';

const cateApp = (function () {

  let allQuestions = catechesis.allQuestions;
  console.log(allQuestions);
    
  const initialClick = function () {
    // $('.question-section').on ('click', '.js-click', function(event){
    $( '.js-click').on ('click', function(event){
      event.preventDefault();

      let ourButton = event.currentTarget;
      const paraID = $(ourButton).siblings('p').attr('id');
      $(ourButton).parent('.question-section').html(makeQuestion(paraID));
  
    });
  };
 

  const makeQuestion = function (paraID) {
    let newID = parseInt(paraID)+1;
    let newQuestion = catechesis.allQuestions.find(questions => questions.id === newID);
    catechesis.currentQuestion = newID;
    return `<p id="${newID}" class=${newQuestion.answerType}>${newQuestion.question}</p>

    <form id="userInputs">  
    ${newQuestion.answerLiteral}
    </form>
    <button type ="submit" class="js-answerclick">Submit Answer</button>`;

  };


  // Submits via button - works for single inputs

//NEXT STEPS:
// 1. count inputs
// 2. store vals
// 3. make string and compare

// OR - 1) detect question number from an HTML id;
// 2) Pull "number of inputs" property from STORE object
// 3) store appropriate value(s), stringify and compare

  const subsequentClicks = function () {
    $('.question-section').on ('click', '.js-answerclick', function(event){
      console.log('subsequent click!');
      event.preventDefault();
      let ourButton = event.currentTarget;
      const paraID = parseInt($(ourButton).siblings('p').attr('id'));
      let currentQuestion =  catechesis.allQuestions.find(questions => questions.id ===paraID);
  
      $(':input').each( input => { 
        let answer = $(this).val();
        let order = $('input').data('id');
        console.log(order);
        if (!currentQuestion.answer[order-1] === answer){
          console.log('you fail!');
        } else {
          console.log('right answer!');
          $(ourButton).parent('.question-section').html(makeQuestion(paraID));
        }
      });
      

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