// creating empty arrays
let student={};
console.log(student);


// An array of strings
let colors = ['red','green','yellow']
console.log(colors);

// An array of numbers
let lottoNums = [19,22,56,12,51];
console.log(lottoNums);

// A mixed array
let stuff = [true,68,null]
console.log(stuff);

let fruits = ['orange','mango','banana']
fruits[2] = 'lemon';
console.log(fruits);

let adult = [];
adult[0] = 'fem';
adult[1] = 'devs';
adult.push ('Busia');
adult.push (3);
adult.push(true);
console.log(adult);

let footballTeams = ['chelsea','arsenal','manchester city' ]

footballTeams.pop();
console.log(footballTeams);

// JOIN
let items = [1,2,"fruits","false","true"];
console.log(items.join('-')); 
let includedValue = items.includes('fruits');
console.log(includedValue);

let reverse = items.reverse();
console.log(reverse);
let sliced = items.slice(1,4);
console.log(sliced);

// SPLICE
let splicer = ['pawpaw', 'orange', 'passion', 'mango', 'guava']
// removing an item using spice
splicer.splice(2,2,);
console.log(splicer);

//  ADD ITEMS USING SPLICE
splicer.splice(0,0,'lemon','grapes', false);
 console.log(splicer);

//  REPLACING ITEMS USING SPICE
splicer.splice(0,1,'banana');
console.log(splicer);

// SORTTING ARRAYS
let sorter = ['crocodile','lizard','chamelion','salamander']
let sorted = sorter.sort();
console.log(sorted);

// NESTING ARRAYS
const color = [
    ['red','crimson'],
    ['orange','dark orange'],
    ['yellow','golden red'],
    ['green','olive'],
    ['blue','navy blue'],
    ['purple','orchid'],
]
colors.splice(6,0,['maroon','brown']);
console.log(colors)

 let concatenated = colors[2].concat(colors[4]);
// console.log(concatenated.join('?'));
console.log(concatenated.toUpperCase);

const details = [
  ['age',20],
    ['city','tulsa'],
    ['zip',91003],
    ['isAdmin',true]

];

const age = details[0].join('-');
console.log(age);
const city = details[1].join('-');
console.log(city);
const zip = details[2].join('-');
console.log(zip);
const isAdmin = details[3].join('-');
console.log(isAdmin);



console.log(color[0]);
console.log(color[0][1]);
console.log(color[4][1]);


