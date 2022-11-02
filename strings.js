let animal = "dog";
console.log(animal.length);

//acces individual characters in a string
 console.log(animal[3]);

 let msg ="i am king";
 console.log(msg);
 let yellMsg = msg. toUpperCase();
 console.log(yellMsg);

 let angry ="LeAVE  Me aLoNe";
 let lower = angry.toLowerCase();
 console.log(lower);

//  trim method
let greetings = 'leave me alone please';
console.log(greetings);
 let newGreetings = greetings.trim();
 console.log(newGreetings);

 let tvShow ='catdog'
 let firstIndex = tvShow.indexOf('cat');
 console.log(firstIndex);
//  slice
let str = 'lokichoggio';
console.log(str);

let partOfStr = str.slice(2,6);
console.log(partOfStr);

// replace
let annoyingLaugh = 'teehee so funny! teehee';
console.log(annoyingLaugh);
 let replacer = annoyingLaugh.replace('teehee', 'haha');

 let song ='london calling';
 let upper = song.toUpperCase();
 console.log(upper);

//  template literals
let totals = `We are ${20}`;
console.log(totals);


let cohortOne = 15;
let cohortTwo = 20;

let femidevs = `We are ${cohortOne + cohortTwo} in total`;
console.log(femidevs);

let drinks = `soda`;
let quantity = 2;
let price = 970;
// We bought 2 crates of soda at kshs.1940
let  soda = `we bought 2 crates of soda at kshs 1940 ${quantity * price}`;
console.log(soda);

 


