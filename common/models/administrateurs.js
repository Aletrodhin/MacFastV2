module.exports = function(Administrateurs) {
    Administrateurs.validatesPresenceOf('nom', 'email');
    Administrateurs.validatesLengthOf('password', {min: 5, message: {min: 'Le mot de passe doit avoir au moins 5 caractères.'}});
    Administrateurs.validatesUniquenessOf('email', {message: "L'adresse email n'est pas unique."});
};
