'use strict';


$('nav li').on('click', function() {
  let $clicked = $(this).data('character');
  $('.class-hide').hide();
  $('#' + $clicked).fadeIn(900);
  $('img').hide();
});


$('section#shapes').on('click', 'li', function(){
  let $clicked = $(this).text();
  let $newP = $('ul#log p:first-child').clone().text(`${$clicked} was selected`);
  $('#log').append($newP);
});


$('button#add-first').on('click', function(){
  let $newOption = $('ul#first li:first-child').clone().text('Group-1 New Option');
  $('ul#first').append($newOption);
});


$('button#remove-first').on('click', function(){
  $('ul#first li:last-child').remove();
});


$('button#add-second').on('click', function(){
  let $newOption = $('ul#second li:first-child').clone().text('Group-2 New Option');
  $('ul#second').append($newOption);
});


$('button#remove-second').on('click', function(){
  $('ul#second li:last-child').remove();
});


$('button#clear').on('click', function(){
  $('ul#log p').remove();
});


$('select#colors').on('change', function(){
  let $selected = $(this).val();
  $('img').hide();
  $('img#' + $selected).fadeIn(900);
});





$(document).ready(function (){
  $('.class-hide').hide();
});
