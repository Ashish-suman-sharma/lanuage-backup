var detail = {
    name: "ashish",
    age: 21,
    address: "bihar"
};

var myage = detail.age;
console.log(myage);
console.log(detail.name);

var deatilarray = [
    {
        name: "ashish",
        age: 21,
        address: "bihar"
    },
    {
        name: "suman",
        age: 22,
        address: "bihar"
    },
    {
        name: "kumar",
        age: 23,
        address: "bihar"
    }
];

console.log(deatilarray[2].name);

var digit = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sqauredigit = digit.map(function (digit) {
    return digit * digit;
});
console.log(sqauredigit);