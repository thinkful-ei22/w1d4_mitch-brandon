'use strict';
(() => {
//function to add an item to the shopping list
  
  // let output = [];
  $('#js-shopping-list-form button').on('click', function(event){
    event.preventDefault();
    let entry = $('.js-shopping-list-entry').val();
    //console.log($('.js-shopping-list-entry').val());
    $('.shopping-list').append((`<li><span class="shopping-item">${entry}</span><div class="shopping-item-controls"> <button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`)); 
  });
  

  //check and uncheck items on the list by clicking the "Check" button


  $('.shopping-list').on('click', '.shopping-item-toggle', function(){
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });





//permanelty remove items
$('.shopping-list').on('click', '.shopping-item-delete', function(){
$(this).closest('li').remove();

});

})();