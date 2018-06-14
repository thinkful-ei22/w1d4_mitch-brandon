'use strict';

$(function() {
  $('#number-chooser').submit(click => {

    event.preventDefault();
    $('.js-results').empty();
    let countTo = parseInt( $(this).find('input[name="number-choice"]').val());
    let output = [];

    for (let x = 1; x <= countTo; x++) {
      if (x % 15 === 0) {
        output.push($('<div class = "fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'));
      } 
      else if (x % 5 === 0) {
        output.push($('<div class = "fizz-buzz-item buzz"><span>buzz</span></div>'));
      }
      else if (x % 3 === 0) {
        output.push($('<div class = "fizz-buzz-item fizz"><span>fizz</span></div>'));
      } 
      else {
        output.push($(`<div class = "fizz-buzz-item"><span>${x}</span></div>`));
      }
    }
    $('.js-results').append(output);
  });
});