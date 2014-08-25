'use strict';

window.addEventListener("load", function() {
  var kosblock = angular.module("kosblock", []);

  // Decorate the HTML tag with ng-app (Angular root directive) 
  // and ng-csp (Content Security Policy directive)
  $('html').attr('ng-app', '').attr('ng-csp', '');


  // Fix the controller to the comments div
  $('#comments').attr('ng-controller', 'CommentsController');

  // Define the controller
  kosblock.controller('CommentsController', function ($scope) {

  });

  // Append the kosblocker directive underneath all comment footers (div.cf)
  $('p.cl').append('[ <a kosblocker></a> ]');

  // Attach the directive to the kosblocker element
  kosblock.directive('kosblocker', function() {
    return {
      restrict: 'A'
      , replace: true
      , template: '<a>Bozo</a>'
    };
  });


  // Bootstrap the page to attach angular and our customizations
  var html = document.getElementsByName('html');
  angular.bootstrap($('html'), ['kosblock'], []);

});
