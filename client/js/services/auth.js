var authMod = angular.module('auth', [
    'ui.router',
    'lbServices'
]);

authMod.factory('AuthService', ['Administrateurs', '$q', '$rootScope', '$state', function (User, $q, $rootScope, $state) {

    function login(email, password) {

        return User.login(
            {},
            {email: email, password: password},
            successConnection,
            errorConnection
        );
    }

    function logout() {

        return User
            .logout()
            .$promise
            .then(function () {
                $rootScope.currentUser = null;
            });
    }

    function register(email, password) {

        return User
            .create({
                email: email,
                password: password
            })
            .$promise;
    }

    function successConnection(response) {
        $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            email: email
        };
        $state.go('recompenses');
    }

    function errorConnection(error){
        var code = error.data.error.code,
            msg = "Echec de connexion !";

        if(code === "LOGIN_FAILED")
            msg = "Email ou mot de passe invalide.";

        Materialize.toast(msg, 6000);
    }

    return {
        login: login,
        logout: logout,
        register: register
    };
}]);
