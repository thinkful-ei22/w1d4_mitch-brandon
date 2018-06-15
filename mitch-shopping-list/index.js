'use strict';

(() => {

// In terms of user experience, your shopping list app must allow users to:

// enter items they need to purchase by entering text and hitting "Return" or clicking the 
// "Add item" button
  $('#js-shopping-list-form button').on('click', function(){
    event.preventDefault();
    let entry = $('.js-shopping-list-entry').val();
    $('.shopping-list').append(`<li><span class="shopping-item">${entry}</span><div class="shopping-item-controls">
          <button class="shopping-item-toggle"><span class="button-label">check</span></button>
          <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);
  });

  // check and uncheck items on the list by clicking the "Check" button
  $('.shopping-list').on('click', '.shopping-item-toggle', function(){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

  // permanently remove items from the list
  $('.shopping-list').on('click', '.shopping-item-delete', function(){
    $(this).closest('li').remove();
  });


// Hint: you may find it helpful to read up on and use the following jQuery methods: 
// .submit(), preventDefault(), toggleClass(), and closest().
})();