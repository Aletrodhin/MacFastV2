
recompenseMod.controller('AllRecompenseController',
    ['$scope', 'Recompenses', '$state', function($scope, Recompenses, $state){

        $scope.recompenses = Recompenses.find();
}]);
