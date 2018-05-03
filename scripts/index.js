'use strict';

/* global cateApp */

window.onload = function() {
  if (window.jQuery) {  
      // jQuery is loaded  
      alert("Yeah!");
  } else {
      // jQuery is not loaded
      alert("Doesn't Work");
  }
}

$(document).ready(function() {
  console.log('index.js working');
  cateApp.bindEventListeners();
});

