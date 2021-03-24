
function calculateStatistics(str) {
    let result = {};

    str.split('') // [...str]
        .filter(ch => ch.match(/[A-Za-z0-9]/)) // use class, \w ?
        .forEach(ch => {
            result[ch] = result[ch] ? result[ch] + 1 : 1;
        });

    return result;
}

// const stats = calculateStatistics("abc, sdaf!");
// console.log(stats);
