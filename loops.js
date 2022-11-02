for (let i = 1; i<=10; i++){
    console.log(i);
}

for(let i = 0; i<=20; i++){
    console.log(i);
}

for(let i = 20; i>=0; i--){
    console.log(i);
}
for(let i =50; i>=0; i-= 10){
    console.log(i);
}
for(let i = 0; i<=50; i +=10){
    console.log(i);
}
const animals = ['lions','tigers', 'bears'];
for (let i = 0; i < animals.length; i++){
    console.log(i, animals[i]);
}
// animal at index 0 is lions
for(let i = 0; i<animals.length; i++){
console.log(`animals at index of ${i} is ${animals[i]}`);
}
let str = 'LOL';
for (let i = 0; i <=4; i++) {
console.log(`inner: ${i}`);
}
for(let j = 0; j <=str.length; j++){
    console.log(`outer:${str[j]}`);
}

// WHILE LOOPS
let num = 0;
while(num<10){
    console.log(num);
    num++;
    

}

let targetNum = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);

while(guess !==targetNum){
console.log(`guessed ${guess}...incorrect!`);
guess = Math.floor(Math.random()*10);
}
console.log(`CORRECT! Guessed: $(guess) $ target was: $ (targetNum)`);

// using for...of
for(let t of 'sofi'){
    console.log(t);
}

let subreddits = ['soccer', 'popheads', 'cringe', 'books'];
for(let sub of subreddits){
console.log(`${sub}-www.reddit.com/r/${sub}`);
}

// Nested for...of
const magicSquare = [
   [2, 7, 6],
   [9, 5, 1],
   [4, 3, 8]
];
// console.log(magicSquare[0][2]);//accessing elements within a nested
for(let row of magicSquare){
    //console.log(row);

   let sum = 0;
    for(let num of row) {
        sum += num;
    }
    console.log(`Row of ${row} sum to ${sum}`);
    
}

const movieReviews = {
    Amadeus : 10,
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8
};

for(let movie of Object.keys(movieReviews)){
    // console.log(movie);
    let score = movieReviews[movie]
    console.log(`I rated ${movie} ${score}`);
}

// For...in loop
const jeorpadyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 300000,
     tournamentOfChampions : 500000,
     battleOfTheDecades : 100000
};
let total = 0;
for(let key in jeorpadyWinnings){
    total += jeorpadyWinnings[key];
}
console.log(total);
