
/**
 * Retourne la position d'un object dans une collection depuis son id
 *
 * @param array
 * @param id
 *
 * @return {number}
 */
var getIdFromArray = function (array, id) {

    for(var i = 0; i < array.length; i++){

        if(array[i].id === id)
            return i;
    }

    return -1;
};