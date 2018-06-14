'use strict';

$(() => {

// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the 
// "Add item" button
  // $('#js-shopping-list-form').submit(click => {
  //   console.log('add item!');
  // });

  // $('button').on('click', function(event) {
  //   event.preventDefault();
  //   console.log('ok');

  // });

  $('#js-shopping-list-form').on('click', function(event){
    $('button').on('click', function(event) {
      alert('add item!');
    });
  });

  // check and uncheck items on the list by clicking the "Check" button

  $(function(){
    $('.shopping-item-toggle').on('click', function(event){
      alert('check!');
    });

  });

  // permanently remove items from the list

  $(function(){
    $('.shopping-item-delete').on('click', function(event) {
      alert('delete');
      $();

    });
  });

// Hint: you may find it helpful to read up on and use the following jQuery methods: 
// .submit(), preventDefault(), toggleClass(), and closest().



});