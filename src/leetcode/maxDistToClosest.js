function maxDistToClosest(seats) {
    let max = 0;
    let count = 0;
    let i = 0;

    // check beginning of the row
    if (seats[i] === 0) {
        while (seats[i] === 0) {
            ++i;
            ++count;
        }

        max = count;
        count = 0;
    }

    for (; i < seats.length; ++i) {
        const currentSeat = seats[i];

        // check if this is a last seat
        if ((i === seats.length - 1) && currentSeat === 0) {
            ++count;
            max = Math.max(max, count);
            break;
        }

        // regular seats
        if (currentSeat === 1) {
            count = 0;
        } else {
            ++count;
            max = Math.max(max, Math.ceil(count / 2));
        }
    }

    return max;
}

module.exports.maxDistToClosest = maxDistToClosest;
