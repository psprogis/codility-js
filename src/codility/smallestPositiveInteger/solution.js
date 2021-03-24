function solution(A) {
    const arr = A;
    let result = 1;

    const sorted = arr.sort();
    let foundPositive = false;

    for (let i = 0; i < sorted.length - 1; ++i) {
        let first = sorted[i];

        if (isPositive(first))

            if (Math.abs(sorted[i] - sorted[i + 1]) > 1) {
                return sorted[i] + 1;
            }
    }

    return foundPositive ? sorted[sorted.length - 1] + 1 : result;
}

function isPositive(number) {
    return number > 0;
}

module.exports.solution = solution;
