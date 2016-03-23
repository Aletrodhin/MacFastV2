/**
 * Created by fabien on 23/03/16.
 */

var recompenseMod = angular.module('recompense', [
    'ui.router',
    'lbServices'
]);

recompenseMod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('add-recompense', {
            url: '/add-recompense',
            templateUrl: 'modules/recompense/views/add-recompense-form.html',
            controller: 'AddRecompenseController'
        })
        .state('forbidden', {
            url: '/forbidden',
            templateUrl: 'modules/recompense/views/forbidden.html'
        })
        .state('all-recompense', {
            url: '/all-recompense',
            templateUrl: 'modules/recompense/views/all-recompense.html',
            controller: 'AllRecompenseController'
        });

    $urlRouterProvider.otherwise('all-recompense');

}]);
