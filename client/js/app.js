/**
 * Main program
 */
angular.module('app',
    [
        'ui.router',
        'lbServices',
        'recompense',
        'auth'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('forbidden', {
                url: '/forbidden',
                templateUrl: '../views/forbidden.html'
            });
    }])

    .run(['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$on('$stateChangeStart', function (event, next) {
            // redirect to login page if not logged in
            if (next.authenticate && !$rootScope.currentUser) {
                event.preventDefault(); //prevent current page from loading
                $state.go('forbidden');
            }
        });
    }]);


