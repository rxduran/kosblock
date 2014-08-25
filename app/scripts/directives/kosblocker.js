angular.module('kosblock')
  .directive('kosblocker', function($sce) {
    return {
      restrict: 'E'
      , replace: false
      , templateUrl: $sce.trustAsResourceUrl(chrome.extension.getURL('views/directives/kosblocker.html'))
      , scope: {
        kossack: '='
      }
      , link: function(scope,elem,attr) {

      }
    };
  });