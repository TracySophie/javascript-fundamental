
//  function scope
let bird = 'mandarin duck';
function birdWatch(){
  let bird = 'golden pheasant';
  console.log(bird);
}
console.log(bird);
birdWatch();


//Block scope
let radius = 8;
if(radius>0){
    const  PI = 3.14;
    let circ = 2 * PI * radius;
    console.log(circ);
}
console.log(radius);
// console.log(PI);
// console.log(circ);


// lexical scope
function outer(){
    let movie = 'Accident man';
    console.log(movie);

    function inner(){
        // let movie = 'shoot em up'
        console.log(movie.toUpperCase());

    
    function extras(){
 console.log(movie.toUpperCase());
    }
    extras();
}
inner();
}
outer();

//function expression
const square= function (num){
    return num * num;
}

console.log(square(7));
square(7);

//high order functions

// REASONS WHY FUNCTIONS ARE STORED IN VARRIABLES
//We can store alot of them in an array
//we can even pass them arround as arguments
//we can put them in varriables
//In javascript,functions are objects
//use console.dir in the browser to prove that functions are objects

function callTwise(func){
    func()
    func()
}
function laugh(){
    console.log('KICHEKOOOO');
};
callTwise(laugh);

function makerBetweenFunc(min, max){
    return function(val) {
        return val >= min && val <= max;
    }
}
const inAgeRange = makerBetweenFunc(18, 100);
inAgeRange(17);
console.log(inAgeRange(17));
inAgeRange(80);
console.log(inAgeRange(80));


function rage(){
    console.log('I hate everything');
}



function repeatNTimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}

repeatNTimes(rage, 13)

function add(x, y){
return x + y;
}
function multiply(x, y){
return x + y;
}
function divide(x, y){
    return x + y;
}
function subtract(x, y){
    return x + y;
}
const student = {
age: add,
jane: multiply,
dog: divide,
cat: subtract,
}
console.log(student.age(2, 4));
console.log(student.jane(2, 3));
console.log(student.dog(4, 2));
console.log(student.cat(5, 2));

//nesting objects in an array

const arr1 = [add, multiply, divide, subtract]
for(let student of arr1){
    let arr2 = student(2,3)
    console.log(arr2);
}