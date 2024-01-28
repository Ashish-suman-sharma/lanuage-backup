const sentance = "the quick brown fox jumps over the lazy dog";
const word = "fox";

console.log(`the word "${word}" ${sentance.includes(word) ? "is" : "is not"} in the sentance`);

console.log(sentance.toUpperCase());

let str = 'please give me rs 1000'
let amount = Number.parseInt(str.slice("please give me rs".length));
console.log(amount);  
console.log(typeof amount);