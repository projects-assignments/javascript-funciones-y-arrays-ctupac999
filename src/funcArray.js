/* Encuentra el máximo */

export function maxOfTwoNumbers(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
    //     if (numero1>numero2) {return numero1}
    //     else {return numero2}
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
// export function greatestProduct(matrix) {
//     let maxProduct = 0;
//     for (let x = 0; x < matrix.length - 3; x++) {
//         let z = 0
//         z++
//         const productHorizontal = (matrix[z][z]) * (matrix[z][z + 1]) * (matrix[z][z + 2]) * (matrix[z][z + 3]);
//         if (productHorizontal > maxProduct) {
//             maxProduct = productHorizontal;
//         }
//         const productVertical = (matrix[z][z]) * (matrix[z + 1][z]) * (matrix[z + 2][z]) * (matrix[z + 3][z]);
//         if (productHorizontal > maxProduct) {
//             maxProduct = productHorizontal;
//         }
//         const productDiagonal = (matrix[z][z]) * (matrix[z + 1][z + 1]) * (matrix[z + 2][z + 2]) * (matrix[z + 3][z + 3]);
//         if (productHorizontal > maxProduct) {
//             maxProduct = productHorizontal;
//         }
//         const productDiagonalInversa = (matrix[y][(matrix[x + 3]).lenght]) * (matrix[y][(matrix[y]).lenght - 1]) * (matrix[y][(matrix[y]).lenght - 2]) * (matrix[y][(matrix[y]).lenght] - 3);
//         if (productHorizontal > maxProduct) {
//             maxProduct = productHorizontal;
//         }

//     }
// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length ; j++) {
//         const product = matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] * matrix[i][j + 3];

//         if (product > maxProduct) {
//             maxProduct = product;
//         }
//     }
// }
// for (let x = 0; x < matrix.length - 3; x++) {
//     let z = 0
//     z++
//     const productVertical = (matrix[z][z]) * (matrix[z + 1][z]) * (matrix[z + 2][z]) * (matrix[z + 3][z]);
//     if (productHorizontal > maxProduct) {
//         maxProduct = productHorizontal;
//     }
//     console.log("maxProduct", matrix)
// }
// for (let x = 0; x < matrix.length - 3; x++) {
//     let z = 0
//     z++
//     const productDiagonal = (matrix[z][z]) * (matrix[z + 1][z + 1]) * (matrix[z + 2][z + 2]) * (matrix[z + 3][z + 3]);
//     if (productHorizontal > maxProduct) {
//         maxProduct = productHorizontal;
//     }
// }

// for (let x = 0; x < matrix.length - 3; x++) {
//     let z = 0
//     z++

//     const productDiagonalInversa = (matrix[y][(matrix[x + 3]).lenght]) * (matrix[y][(matrix[y]).lenght - 1]) * (matrix[y][(matrix[y]).lenght - 2]) * (matrix[y][(matrix[y]).lenght] - 3);
//     if (productHorizontal > maxProduct) {
//         maxProduct = productHorizontal;
//     }

// }
//     return maxProduct;
// }

// export function greatestProduct(matrix) {
//     let maxProduct = 0;
//     for (let x = 0; x < matrix.length - 3; x++) {
//         for (let z = 0; z < matrix[x].length - 3; z++) {
//             const productHorizontal = matrix[x][z] * matrix[x][z + 1] * matrix[x][z + 2] * matrix[x][z + 3];
//             if (productHorizontal > maxProduct) {
//                 maxProduct = productHorizontal;
//             }

//             const productVertical = matrix[x][z] * matrix[x + 1][z] * matrix[x + 2][z] * matrix[x + 3][z];
//             if (productVertical > maxProduct) {
//                 maxProduct = productVertical;
//             }

//             const productDiagonal = matrix[x][z] * matrix[x + 1][z + 1] * matrix[x + 2][z + 2] * matrix[x + 3][z + 3];
//             if (productDiagonal > maxProduct) {
//                 maxProduct = productDiagonal;
//             }

//             const productDiagonalInversa = matrix[x][z + 3] * matrix[x + 1][z + 2] * matrix[x + 2][z + 1] * matrix[x + 3][z];
//             if (productDiagonalInversa > maxProduct) {
//                 maxProduct = productDiagonalInversa;
//             }
//         }
//     }
//     return maxProduct;
// }


export function greatestProduct(matrix) {
    let maxProduct = 0;
    for (let y = 0; y < matrix.length; y++) {//horizontal
        for (let x = 0; x < matrix[y].length; x++) {
            const product = matrix[y][x] * matrix[y][x + 1] * matrix[y][x + 2] * matrix[y][x + 3];

            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }

    for (let y = 0; y < matrix.length - 3; y++) { //vertical
        for (let x = 0; x < matrix[y].length; x++) {
            const product = matrix[y][x] * matrix[y + 1][x] * matrix[y + 2][x] * matrix[y + 3][x];

            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    for (let y = 0; y < matrix.length - 3; y++) { //diagonal 
        for (let x = 0; x < matrix[y].length - 3; x++) {
            const product = matrix[y][x] * matrix[y + 1][x + 1] * matrix[y + 2][x + 2] * matrix[y + 3][x + 3];

            if (product > maxProduct) {
                maxProduct = product;
            }
        }
    }
    for (let y = 0; y < matrix.length - 3; y++) { //diagonal inversa
        for (let x = 3; x < matrix[y].length; x++) {
            const product = matrix[y][x] * matrix[y + 1][x - 1] * matrix[y + 2][x - 2] * matrix[y + 3][x - 3];

            if (product > maxProduct) {
                maxProduct = product;
            }
        }
        return maxProduct;
    }
}
