// Functions
function grumpus() {
console.log('ugh...you again...');
console.log('for the last time...');
console.log('LEAVE ME ALONE!!!');
}
grumpus();
function greet(name){
    console.log(`Hi, ${name}`);
};
greet('Tracy');

// Multiple numbers
function multiply(x,y){
    console.log(x*y);
}
multiply(2,3);

//DIVISION NUMBERS
function divide(z,x){
    console.log(z/x);
}
divide(15,3);

//SQUARE NUMBERS
function square(y){
    console.log(y * y);
}
square(8);

function greet (name) {
    console.log(`Hello,${name}`.toUpperCase());
}
greet('tracy')

// AVERAGE OF NUMBERS
// function avg(a,b,c,d){
// console.log(a+b+c+d/avg.length);

// }
// avg(4,3,2,5)

function avg(arr){
    let sum = 0;
    for(let r of arr){
        sum += r;
        console.log(sum);
    }
    const average = sum / arr.length
    console.log(average);
}
avg([2, 3, 4 ,5])

function findLargest(x,y){
if(x > y) 
console.log(`${x}is large`);

else if(x < y)
console.log(`${y} is larger`);

else{
console.log(`${x} and ${y} are equal`);
}

}
findLargest(6, 8);

// RETURN IN FUNCTIONS
//Return value can be captured or stored for future use
//functions returns only one value



function add(x, y){
    return x + y;//return only one value
    console.log('Hi');
}
const total = add(2, 3);
console.log(total);

function isPurple(color){
    if(color == 'purple'){
return true;
    }
    else {
        return false;
    }
    
    
}
const color = isPurple('blue');
console.log(color);

//write isValidPassword function
//it accepts 2 parameters: password and username
//password must:
//-be atleast 8 characters
//-cannot contain spaces
//-cannot contain the username
//if all requirements are met, return true.
//otherwise : false

function isValidPassword(password, username){
if (password.length >= 8){
    return false;
}
if (password .indexOf('')=== -1) {
    return false;  
}

if(password.indexOf(username )=== -1) {

return false;
}
else{
    return true;
}
}
const Uname = isValidPassword('evansofi4', 'sophie')
console.log(Uname);


//MORE REFACTORING

// function isValidPassword(password, username){
    // const tooshort = password.length < 8;
    // const hasSpace = password('') !== -1;
    // const containUsername = password (username)!== -1;
//}


//write a function  called isPangram, which checks to see given sentence contains every letter of the alphabet
//make sure you ignore string casing
function isPangram(sentence){
let lowerCased = sentence. toLowerCase();
for(let char of 'abcdefghijklmnopqrstuvwxyz'){
    if(lowerCased.indexOf(char)=== -1){
        return false;
    }
}
}
const panGram = isPangram('The quick brown fox jumps over the lazy dog');
console.log(panGram);

