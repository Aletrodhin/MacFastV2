
recompenseMod.controller('AddRecompenseController',
    ['$scope', 'Recompenses', '$state', function($scope, Recompenses, $state){

    $scope.recompense = {};

    $scope.submitForm = function () {

        Recompenses
            .create($scope.recompense)
            .$promise
            .then(function () {
                $state.go('all-recompense')
            });
    };
}]);
