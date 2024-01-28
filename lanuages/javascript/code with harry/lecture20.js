// map , filter , reduce in javascript

// map
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map((value , index ,array)=>{
    console.log(value , index , array);
    return value+ index;
})

// filter
let arr2 = [ 15, 16, 17, 18, 19];

let a2 = arr2.filter((a)=>{
    return a>16;
})
console.log(a2);

// reduce
let arr3 = [ 15, 16, 17, 18, 19];
let a3 = arr3.reduce((h1 , h2)=>{
    return h1+h2;
})
console.log(a3);

// from this chapter we learn about map , filter , reduce in javascript and uses are map is used for iterate the array and also used for perform some operation on array , filter is used for iterate the array and also used for filter the array , reduce is used for iterate the array and also used for perform some operation on array and also used for reduce the array.