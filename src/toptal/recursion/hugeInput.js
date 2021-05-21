// The following recursive code will cause a stack overflow
// if the array list is too large.
// How can you fix this and still retain the recursive pattern?

function readHugeList() {
    return new Array(1000000).fill(10);
}

const list = readHugeList();
let counter = 0;

function nextListItem() {
    const item = list.pop();
    ++counter;

    if (item) {
        /* eslint-disable-next-line no-console */
        console.log(`${counter}, work with ${item}`);
        // process the list item...
        // nextListItem();
        setTimeout(nextListItem, 0);
    }
}

nextListItem();
