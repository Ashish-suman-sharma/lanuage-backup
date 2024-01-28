let number = 15;

if (number > 10) {
    console.log("number is greater than 10");
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

var num = 1;
while (num <= 5) {
    console.log(num);
    num++;
}

function oddeven(n) {
    if (n % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

oddeven(10);

var isTrue = false;
var result = isTrue ? "It's true" : "It's false";
console.log(result);