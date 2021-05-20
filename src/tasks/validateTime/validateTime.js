function validTime(time) {
    const timeParts = time.split(':');

    return checkTimePart(timeParts[0], 24) && checkTimePart(timeParts[1], 60);
}

function checkTimePart(part, limit) {
    const intPart = Number.parseInt(part);

    if (Number.isNaN(intPart)) {
        return false;
    }

    return intPart < limit;
}

// console.log(validTime("13:58"))
module.exports.validateTime = validTime;
