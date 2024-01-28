//what is function . a simple example of function

function oneplusavg(x, y) {
    return 1 + (x + y) / 2;
}
let a = 10;
let b = 20;
let c = 30;

console.log("one plus averge of a and b is  " + oneplusavg(a, b));
console.log("one plus averge of a and c is  " + oneplusavg(a, c));
console.log("one plus averge of c and b is  " + oneplusavg(c, b));

// a function is block of code which is used to perform a particular task. it is used to avoid the repitation of code. it is used to make the code more readable and easy to understand. it is used to make the code more modular. it is used to make the code more reusable. it is used to make the code more debuggable. it is used to make the code more testable. it is used to make the code more maintainable. it is used to make the code more scalable. it is used to make the code more flexible. it is used to make the code more extensible. it is used to make the code more secure. it is used to make the code more performant. it is used to make the code more optimized. it is used to make the code more efficient. it is used to make the code more robust. it is used to make the code more portable. it is used to make the code more


// converting normal function to arrow function

function plus(x, y) {
    return x + y;
}
console.log(plus(10, 20));

// converting above function to arrow function
const plusArrow = (x, y) => x + y;
console.log(plusArrow(10, 20));