// https://leetcode.com/problems/number-of-islands/

function numIslands(grid) {
    const rows = grid.length;
    const columns = grid[0].length;

    if (rows === 0) return 0;

    let counter = 0;

    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < columns; ++j) {
            if (isLand(grid[i][j])) {
                ++counter;
                markNeighbour(grid, i, j);
            }
        }
    }

    return counter;
}

// we use copy of grid and avoid mutation of original grid, but it requires 2x memory
function markNeighbour(grid, row, column) {
    /* eslint-disable-next-line no-param-reassign */
    grid[row][column] = 'visited';

    if (grid[row][column - 1] === '1') {
        markNeighbour(grid, row, column - 1);
    }

    if (grid[row][column + 1] === '1') {
        markNeighbour(grid, row, column + 1);
    }

    if (grid?.[row - 1]?.[column] === '1') {
        markNeighbour(grid, row - 1, column);
    }

    if (grid?.[row + 1]?.[column] === '1') {
        markNeighbour(grid, row + 1, column);
    }
}

function isLand(cell) {
    return cell === '1';
}

module.exports.numIslands = numIslands;
