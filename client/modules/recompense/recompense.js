/**
 * Created by fabien on 23/03/16.
 */

var recompenseMod = angular.module('recompense', [
    'ui.router',
    'lbServices'
]);

recompenseMod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider) {

    $stateProvider
        .state('recompenses', {
            url: '/recompenses',
            templateUrl: 'modules/recompense/views/recompenses.html',
            controller: 'RecompensesController',
            authenticate: true
        });
}]);
