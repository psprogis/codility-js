/* eslint-disable no-param-reassign */
function setZeros(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    let setZerosInColumn = false;

    for (let i = 0; i < rows; ++i) {
        if (matrix[i][0] === 0) {
            setZerosInColumn = true;
        }

        for (let j = 1; j < columns; ++j) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;  // set first element in a row to zero
                matrix[0][j] = 0;  // set first element in a column to zero
            }
        }
    }

    for (let i = 1; i < rows; ++i) {
        for (let j = 1; j < columns; ++j) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    if (matrix[0][0] === 0) {
        for (let j = 0; j < columns; ++j) {
            matrix[0][j] = 0;
        }
    }

    if (setZerosInColumn) {
        for (let i = 0; i < rows; ++i) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

module.exports.setZeros = setZeros;
