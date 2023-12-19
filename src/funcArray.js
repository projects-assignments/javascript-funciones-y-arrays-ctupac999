/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
export function findLongestWord(array) {
    if (array == 0) return undefined;

    let word = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i].length > word.length) {
            word = array[i];
        }
    }

    return word;
}
export function sumArray(array) {
    const initialValue = 0;
    const sumWithInitial = array.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue, initialValue,
    );
    return sumWithInitial;
}
export function averageNumbers(array) {
    if (array == 0) return undefined;
    return (sumArray(array) / array.length)
}
export function averageWordLength(array) {
    if (array.length === 0) {
        return undefined;
    }

    const totalLength = array.reduce(
        (accumulator, currentValue) =>
            accumulator + currentValue.length,
        0
    );

    return totalLength / array.length;
}
export function uniquifyArray(array) {
    if (array == 0)
        return undefined;
    let unicArray = [...new Set(array)];
    return unicArray;

}
export function doesWordExist(array, word) {
    if (array === 0)
        return undefined;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            return true;
        }
    }
    return false;
}
export function howManyTimes(array, word) {
    if (array == 0) return undefined;

    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            count++;
        }
    }

    return count;
}
export function greatestProduct() { }





