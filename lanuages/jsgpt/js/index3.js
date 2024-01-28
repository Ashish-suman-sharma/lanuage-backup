function greet(name) {
    var greet = "Hello " + name + " welcome to our website";
    return greet;
}
console.log(greet(" ashish suman"))


function arraysum(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arraysum(array));

