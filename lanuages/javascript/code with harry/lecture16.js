//learning array

var arr = [1, 2, 3, 4, 5, 6, 7, 8, false, "hello"];
console.log(arr);
console.log(arr[9]);
console.log(arr[7]);
console.log(arr[5]);
console.log(arr[3]);
console.log(arr[11]); //undefined
arr[10] = "world"; //adding new element

console.log(arr);
arr[0] = 76; //changing value of element
console.log(arr);


//we are using array for storing more than one value in a single variable, we can store any type of data in array. 

//we can also store array in array, this is called nested array.
//we can also store object in array, this is called array of object.
//we can also store function in array, this is called array of function.
//we can also store array in object, this is called object of array.

//printing value of array using for loop

var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, false, "hello"];

for (i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
