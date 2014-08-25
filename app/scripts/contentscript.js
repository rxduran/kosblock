'use strict';

window.addEventListener("load", function() {
  var app = angular.module("kosblock", []);

  var html = document.querySelector('html');
  html.setAttribute('ng-app', '');
  html.setAttribute('ng-csp', '');

  var comments = document.getElementById('comments');
  comments.setAttribute('ng-controller', 'CommentsController');

  app.controller('CommentsController', function ($scope) {

  });


  $('div.cf').append('<p class="kosblock" kosblock></p>');

  

  angular.bootstrap(html, ['kosblock'], []);

});
