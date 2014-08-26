angular.module('kosblock')
  .directive('kosblocker', function($sce, KillFile) {
    return {
      restrict: 'E'
      , replace: false
      , templateUrl: $sce.trustAsResourceUrl(chrome.extension.getURL('views/directives/kosblocker.html'))
      , scope: {
        kossack: '='
      }
      , link: function(scope,elem,attr) {

        scope.has() {
          return KillFile.has(scope.kossack);
        }

        scope.add() {
          KillFile.add(scope.kossack);
        }

        scope.remove() {
          KillFile.remove(scope.kossack);
        }

      }
    };
  });