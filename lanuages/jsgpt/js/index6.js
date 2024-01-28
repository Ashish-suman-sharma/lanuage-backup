var multiply = (a, b) => a * b;
console.log(multiply(5, 91));


var name = "ashish";
var greet = `hello ${name} welocomw to our website`;
console.log(greet);

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));