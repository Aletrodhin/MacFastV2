/**
 * Created by fabien on 23/03/16.
 */

var recompenseMod = angular.module('recompense', []);

recompenseMod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('add-recompense', {
        url: 'recompenses/all',
        controller: 'recompenseCtrl'
    });

    $urlRouterProvider.otherwise('recompenses', {
        controller: 'recompenseCtrl',
        templateUrl: 'views/add.html'
    });
}]);
