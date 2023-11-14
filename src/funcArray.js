/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
    if (numero1 >= numero2) { return (numero1) }
    else { return (numero2) }
}
export function findLongestWord(array) {
    array.forEach(val => {
        let palabra = "";
        if (val.length() > palabra.length()) { palabra = val; }
    });
    return (palabra)
}


export function sumArray(array) {
    let sumaVariables = 0
    array.forEach(ind, val, array => {
        sumaVariables.parseInt += val.parseInt
    });
    return sumaVariables

}
export function averageNumbers(array) { }
export function averageWordLength() { }
export function uniquifyArray() { }
export function doesWordExist(array, palabra) { }
export function howManyTimes() { }
export function greatestProduct() { }





