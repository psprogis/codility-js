function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; --i) {
        const tmp = arr[i];
        const rnd = Math.floor(Math.random() * (i + 1));

        /* eslint-disable no-param-reassign */
        arr[i] = arr[rnd];
        arr[rnd] = tmp;
        /* eslint-enable no-param-reassign */
    }

    return arr;
}

/* eslint-disable-next-line */
function shuffle2(arr) {
    return arr.sort((a, b) => random(-1, 1));  // eslint-disable-line
}

function random(min, max) {
    return min + Math.random() * (max - min);
}

module.exports.shuffle = shuffle;
