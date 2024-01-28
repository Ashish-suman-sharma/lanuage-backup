function createcounter() {
    var count = 0;
    return function () {
        count++;
        return count;
    }
}
var conter = createcounter();
conter();
conter();
conter();
console.log(conter());
