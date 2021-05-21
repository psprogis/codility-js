// What will the code below output to the console and why?
// 'use strict';    // ReferenceError: b is not defined

/* eslint-disable */
(function() {
    var a = b = 3;
})();

console.log(`a defined? ${typeof a !== 'undefined'}`);
console.log(`b defined? ${typeof b !== 'undefined'}`);
/* eslint-enable */
