//loops in javascript
const b = 3;
for (let i = 1; i < b + 1; i++) {
    console.log(i);
}

// program to add frist n natural numbers

function addnumber(n) {
    result = 0;
    for (let i = 0; i <= n; i++) {
        result = result + i;
    }
    return result;
}
console.log(addnumber(3));

//program for factorail oof a number
function factorail(n) {
    result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorail(4));

//program to print the table of a number
function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}
table(2);

//Q. what is for loop
//ans - for loop is a loop which is used to iterate over a block of code for a given number of times.


// for in loop

let obj = {
    ashish: 20,
    rahul: 30,
    ravi: 40,
    sumit: 50
}
for (let key in obj) {
    console.log("mark of " + key + " is " + obj[key]);
}

// for of loop

for (let alphabet of "ashish") {
    console.log(alphabet);
}

// so basically for in loop is used to iterate over the properties of an object and for of loop is used to iterate over the elements of an array or string.