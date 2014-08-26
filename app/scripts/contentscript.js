'use strict';

window.addEventListener("load", function() {
  

  // Decorate the HTML tag with ng-app (Angular root directive) 
  // and ng-csp (Content Security Policy directive)
  $('html').attr('ng-app', '').attr('ng-csp', '');


  // Fix the controller to the comments div
  $('#comments').attr('ng-controller', 'CommentsController');

  
  // Append the kosblocker directive underneath all comment footers (div.cf)
  $('div.cf').each( function(i) {
    var kossack = $(this).find('p.cb a:first').html();
    $(this).find('p.cl').append('[ <kosblocker></kosblocker> ]').each( function(i) { 
      $(this).find('kosblocker').attr('kossack', '"' + kossack + '"');
    });

  });

  // Bootstrap the page to attach angular and our customizations
  var html = document.getElementsByName('html');
  angular.bootstrap($('html'), ['kosblock'], []);

});
