// exercise 1

let fruits = ["apple","banana","orange"];
for(i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// exercise 2

let numbers = [1,2,3,4,5];
let sum = 0;
for(i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// exercise 3

let names = ["John","Jane","Mikhael","Jennifer","Bobby"];
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// exercise 4

let company = [
    ["Jimmy", "John"], 
    ["Bob-1", "Bob-2", "Bob-3"],  
    ["Jennifer", "Charlie", "Karl"], 
    ["Bobb"]  
];
for (let i = 0; i < company.length; i++) {
    for (let j = 0; j < company[i].length; j++) {
        console.log(company[i][j]);
    }
}
let employeers = [];
for (let i = 0; i < company.length; i++) {
    for (let j = 0; j < company[i].length; j++) {
        employeers.push(company[i][j]);
    }
}
employeers.sort();
console.log(employeers);

// exercise 5

function properties(person) {
    return Object.keys(person).length;
}
const person = { name: "John", фамилия: "Doe", возраст: 30, профессия: "developer" };
console.log(properties(person));

// exercise 6
let n = 10;
function generateNumber(n) {
    let numbers = [];
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
    } 
return numbers;
}
console.log(generateNumber(n));


// exercise 7
let number = [5, 8, 2, 10, 3];
function findBiggestNumber(number) {
    let theBiggestNumber = number[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (number[i] > theBiggestNumber) {
            theBiggestNumber = number[i];
        }
    }
 return theBiggestNumber;    
}
console.log(findBiggestNumber(number));

// exercise 8

let grades = {math: 8, literature: 7, history: 9};
function averageGrade(grades) {
    let sum = 0;
    let subjects = Object.values(grades);
    for (let i = 0; i < subjects.length; i++) {
        sum += subjects[i];
    }
 return sum / subjects.length;
}
console.log(averageGrade(grades));

// exercise 9

let dog = new Object();
dog.name = "Pluto";
dog.age = 5;
dog.color = "brown";
function puppies(dog, numPuppies) {
    let newPuppies = [];
    for (let i = 1; i <= numPuppies; i++) {
        newPuppies.push(`Puppy_${i}`);
    }
    dog.newPuppies = newPuppies;
}
puppies(dog, 5);
console.log(dog);
