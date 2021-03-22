// given:
// task: filter all string in a one uppercase string
const promisedArrayOfPromisedStrings = Promise.resolve([
    Promise.resolve('Print'),
    Promise.resolve(123),
    Promise.resolve('this'),
    Promise.resolve('sentence'),
    Promise.resolve(null),
    Promise.resolve('in uppercase'),
]);

// solution:
(async function () {
    const result = (await Promise.all(await promisedArrayOfPromisedStrings))
        .filter(line => typeof line === 'string')
        .map(line => line.toUpperCase())
        .join(' ');

    console.log(result);
})();
