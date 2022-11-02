// CONDITIONAL AND LOGICS

let rating = 3;
if (rating === 3) {
   console.log("That is the right rating"); 
}

else if (rating === 3) {
    console.log("This is a right decision");
 };

//  DAYS OF THE WEEK
// let days = 7;
// if (days === 1) {
// console.log("sunday");
// }
// else if (days === 2) {
//     console.log("monday");
// }
// else if (days === 3) {
//     console.log("tuesday");
// }
// else if (days === 4) {
//     console.log("wednesday");
// }
// else if (days === 5) {
//     console.log("thursday");
// }
// else if (days === 6) {
//     console.log("friday");
// }
// else if (days === 7) {
//     console.log("saturday");
// };

//Declare password variable and give it a value;
//Use if statements to:
//Check if the password has space
//Ensure that your password has a length of more than 6 characters
//console.log something if condition is true


let password= "true sofi";
if (password.length >= 6) {
    if (password.indexOf('') === -1) {
        console.log('VALID PASSWORD');  
    }
   
}
else {
    console.log("INVALID PASSWORD");
}


let age = 76;
if(age<6 || age >= 65){
    console.log("YOU GET IN FOR FREE");
}
else{
    console.log(`YOU NEED TO PAY KSHS.&{50}TO EAT`);
}

// TERNARY OPERATOR

let javascript = 'easy';
if(javascript ==='easy');{
    console.log(javascript);
}


let newPerson="femidevs";
console.log(newPerson=== "femidevs")?'REAL NAME': 'WRONG NAME' ;

if (newPerson==='femidevs'){
    console.log('REAL NAME');
}
// DAYS IN A WEEK
 let days = 9;
switch (days) {
    case 1: console.log('sunday');
        
        break;
        case 2: console.log('monday');
        break;
        case 3: console.log(tuesday);
        break;
        case 4: console.log(wednesday);
        break;
        case 5: console.log(thursday); 
        break;
        case 6: console.log(friday);
        break;
        case 7: console.log(saterday);
        break;
       default:console.log('INVALID DAYS');
        break;
}
// if(days=== 1){
//     console.log(sunday);
// }