function removeDuplicates(numbers) {

    for (let i = 1; i < numbers.length; ++i) {
        if (numbers[i] === numbers[i - 1]) {
            numbers.splice(i, 1);

            --i;
        }
    }

    return numbers.length;
}

module.exports.removeDuplicates = removeDuplicates;