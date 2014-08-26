angular.module('jomiUiApp')
  .service('KillFile', function KillFile($q, $route, $rootScope, $compile) {

    var BasicKillFile = function(root)  {
      this.root = root;
    };

    BasicKillFile.prototype.has = function(kossack) {
      console.log("TODO: is " + kossack + " in killfile?");
      return false;
    };

    BasicKillFile.prototype.add = function(kossack) {
      console.log("TODO: add " + kossack + " to killfile.");
    };

    BasicKillFile.prototype.remove = function(kossack) {
      console.log("TODO: remove " + kossack + " from killfile.");
    };

    BasicKillFile.prototype.block = function() {
      console.log("TODO: Efficiently block all comments by Kossacks in killfile");
    };

    return BasicKillFile;


  });