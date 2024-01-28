let num = [3, 54, 1, 4, 10];

// for loop
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// for each loop
num.forEach((Element) => {
    console.log(Element * Element)
})
// array.from
let name = "ashish";
let nameArray = Array.from(name);
console.log(nameArray);

// for of loop
for (let i of num) {
    console.log(i);
}

// for in loop
for (let i in num) {
    console.log(i);
}

// from this chapter we learn about loops of array , for loop , for each loop , for of loop , for in loop. and uses are  for loop is used for iterate the array , for each loop is used for iterate the array and also used for perform some operation on array , for of loop is used for iterate the array , for in loop is used for iterate the array and also used for iterate the object.