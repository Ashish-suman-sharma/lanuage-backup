let marks = {
    english: 50,
    maths: 60,
    science: 70,
    social: 80,
    hindi: 90
}

for (let key in marks) {
    console.log(marks[key]);
}

let number = {
    ashish: 20,
    rahul: 30,
    ravi: 40,
    sumit: 50
}

for (let key in number) {
    console.log(number[key]);
}

//q. write a  program to print "try anain" until the user enter the correct number

// let correctnumber = 10;

// let i 
// while(i!==correctnumber){
//     i=prompt("enter the number");
// }
// console.log("you guessed the correct number");

//q mean of 4 numbers

const mean = (a, b, c, d) => {
    return (a + b + c + d) / 4;
}

console.log(mean(1, 2, 3, 4));