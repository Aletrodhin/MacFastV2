
recompenseMod.controller('RecompensesController',
    ['$scope', 'Recompenses', '$state', function($scope, Recompenses){

    $scope.recompense = {};
    $scope.recompenses = Recompenses.find();

    $scope.submitForm = function () {

        Recompenses
            .updateOrCreate($scope.recompense)
            .$promise
            .then(function () {

                var idRecompense = getIdFromArray($scope.recompenses, $scope.recompense.id);
                var message = idRecompense ? "Succès de la mise à jour de la récompense" : "Succès de l'ajout d'une récompense";

                $scope.recompenses = Recompenses.find();
                $scope.recompense = {};
                Materialize.toast(message, 3500);
            });
    };

    $scope.changeRecompense = function (id) {

        Recompenses.findById({id: id })
            .$promise
            .then(function (recompense) {
                $scope.recompense = recompense;
            });
    };

    /**
    *  Réinitialise le formulaire
    */
    $scope.resetForm = function () {
        $scope.recompense = {};
    };

    /**
     * @param array
     * @param id
     *
     * @return {number}
     */
    var getIdFromArray = function (array, id) {

        for(var i = 0; i < array.length; i++){

            if(array[i].id === id)
                return id;
        }

        return -1;
    }
}]);
