// What is a potential pitfall with using typeof bar === "object" to determine
// if bar is an object? How can this pitfall be avoided?

// corner cases:
console.log(typeof null);
console.log(typeof Math.abs);
console.log(typeof []);
console.log(Object.prototype.toString.apply([]));

// alternative solutions:
console.log({}.constructor === Object);
console.log(Math.abs.constructor === Object);
console.log([].constructor === Object);

console.log(Array.isArray([]));
