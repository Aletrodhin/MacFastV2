recompenseMod.controller('RecompensesController', ['$scope', 'Recompenses', '$rootScope', function($scope, Recompenses, $rootScope){

    $scope.recompense = {};
    $scope.recompenses = Recompenses.find();

    /**
     * Soumission du formulaire
     */
    $scope.submitForm = function () {

        // Existence données saisies
        if(Object.keys($scope.recompense).length){

            Recompenses
                .updateOrCreate($scope.recompense)
                .$promise
                .then(function () {

                    var idRecompense = getIdFromArray($scope.recompenses, $scope.recompense.id);
                    var message = (idRecompense > 0)
                        ? "Succès de la mise à jour de la récompense"
                        : "Succès de l'ajout d'une récompense";

                    $scope.recompenses = Recompenses.find();
                    $scope.recompense = {};
                    Materialize.toast(message, 3500);
                });
        }
    };

    /**
     * Ajoute la récompense dans le formulaire
     *
     * @param id
     * @param $event
     */
    $rootScope.changeRecompense = function (id, $event) {

        // Annule la redirection
        $event.preventDefault();

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
     * Supprimer une récompense depuis un identifiant
     *
     * @param id
     */
    $scope.supprimerRecompense = function (id) {

        Recompenses.deleteById({ id: id })
            .$promise
            .then(function (result) {

                var message = "Erreur lors de la suppression de la récompense.";

                if(result.$resolved)
                    message = "Succes de la suppression de la récompense.";

                Materialize.toast(message, 3500);

                $scope.recompenses = Recompenses.find();
                $scope.resetForm();
            });
    };

    /**
     * Affiche une fenêtre modale de confirmation
     */
    $scope.displayModal = function () {

        if(Object.keys($scope.recompense).length)
            $('#mdl-suppr-recompense').openModal();
    };

}]);
