// https://leetcode.com/problems/brick-wall/
function leastBricks(wall) {
    const widths = {};
    let max = 0;

    wall.forEach(row => {
        let sum = 0;

        for (let i = 0; i < row.length - 1; ++i) {
            sum += row[i];
            widths[sum] = widths[sum] ? widths[sum] + 1 : 1;
            max = Math.max(widths[sum], max);
        }
    });

    return wall.length - max;
}

module.exports.leastBricks = leastBricks;
