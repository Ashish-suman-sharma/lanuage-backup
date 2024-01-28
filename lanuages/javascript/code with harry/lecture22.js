//q. write a js prog to generate a random number 1-100 and store it in a variable. the prog then take a input from user to tell them the entered value is correct or not. 100 - number guessed is the score of that person. print your score is 

//solution

let score = (n) => {
    let number = Math.floor(Math.random() * 100) + 1;
    score = 100-number+n;
    console.log(number)

    return score;
}
console.log(score(50))