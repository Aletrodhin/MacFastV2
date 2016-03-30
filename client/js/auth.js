/**
 * Created by test on 27/03/16.
 */
authMod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })
        .state('logout', {
            url: '/logout',
            controller: 'LogoutController',
            authenticate: true
        });

    $urlRouterProvider.otherwise('login');
}]);

/**
 * Login
 */
authMod.controller('LoginController', ['$rootScope', '$scope', '$state', 'AuthService',
    function ($rootScope, $scope, $state, AuthService) {

    $rootScope.currentUser = null;

    $scope.login = function (user) {
        AuthService.login(user.email, user.password);
    };
}]);

/**
 * Logout
 */
authMod.controller('LogoutController', [ '$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.currentUser = null;
    $state.go('login');
}]);