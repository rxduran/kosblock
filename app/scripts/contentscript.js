'use strict';

window.addEventListener("load", function() {
  

  // Decorate the HTML tag with ng-app (Angular root directive) 
  // and ng-csp (Content Security Policy directive)
  $('html').attr('ng-app', '').attr('ng-csp', '');


  // Fix the controller to the comments div
  $('#comments').attr('ng-controller', 'CommentsController');

  
  // Append the kosblocker directive underneath all comment footers (div.cf)
  $('p.cl').append('[ <kosblocker></kosblocker> ]').closest('.cf').find('p.cb a:first').each( function (i){
    $(this).closest('.cf').find('kosblocker').attr('kossack', '"' + $(this).html() + '"');
  });

  // Bootstrap the page to attach angular and our customizations
  var html = document.getElementsByName('html');
  angular.bootstrap($('html'), ['kosblock'], []);

});
