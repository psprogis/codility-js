// https://leetcode.com/problems/first-unique-character-in-a-string/

function firstUniqChar(str) {
    let uniqIdx;
    let uniqChar;

    for (let i = 0; i < str.length; ++i) {
        uniqChar = str[i];
        uniqIdx = i;

        if (str.lastIndexOf(uniqChar) === str.indexOf(uniqChar)) {
            return uniqIdx;
        }
    }

    return -1;
}

module.exports.firstUniqChar = firstUniqChar;
