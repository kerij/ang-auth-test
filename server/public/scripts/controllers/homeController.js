// myApp.controller('homeController', ['$rootScope', '$scope', 'authService', 'authManager', function ($rootScope, $scope, authService, authManager) {
//
//   // Set the user profile when the page is refreshed
//       $scope.profile = authService.userProfile;
//
//       // Listen for the user profile being set when the user
//       // logs in and update it in the view
//       $scope.$on('userProfileSet', function(event, userProfile) {
//         $scope.profile = userProfile;
//       });
//
// }]);

(function() {
  'use strict';

  angular
    .module('myApp')
    .controller('homeController', homeController);

    homeController.$inject = ['$rootScope', '$scope', 'authService', 'authManager'];

    function homeController($rootScope, $scope, authService, authManager) {

      $scope.authService = authService;
      console.log("we are in home controller");
      // Set the user profile when the page is refreshed
          $scope.profile = authService.userProfile;

      // Listen for the user profile being set when the user
      // logs in and update it in the view
      $scope.$on('userProfileSet', function(event, userProfile) {
        $scope.profile = userProfile;
      });

    }
})();
// (function() {
//
//   'use strict';
//
//   angular
//     .module('myApp')
//     .controller('loginController', loginController);
//
//     loginController.$inject = ['$scope', 'authService'];
//
//     function loginController($scope, authService) {
//
//       // Put the authService on $scope to access
//       // the login method in the view
//       $scope.authService = authService;
//     }
//
// })();
