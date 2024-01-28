//Q1. create an array of number and take input from user to add number to array.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let input1 = 10;
let input2 = 11;
arr.push(input1);
arr.push(input2);
console.log(arr);

//q2.filter for a number divisible by 3 from an array of numbers.

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a2 =arr2.filter((a)=>{
    return a%3==0;
})
console.log(a2);

//q3. create an array of square of numbers from an array of numbers.

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let a3 =arr.map ((a)=>{
    return a*a;
})
console.log(a3);

//q4. use reduce to find factorial of a given number from an array of frist n natural numbers.(n being the number whose factorial is to be found)

let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let a4 = arr4.reduce((a,b)=>{
    return a*b;
})
console.log(a4);