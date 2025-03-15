// exercise 1
const person = { name: "John", age: 30, city: "New-York" };
function displayObject(obj) {
    const keys = Object.keys(obj);
    let i = 0;
    while (i < keys.length) {
        const key = keys[i];
        console.log(`${key}: ${obj[key]}`);
        i++;
    }
}
displayObject(person);

// exercise 2

const keyToCheck = "age";
const personn = { name: "John", age: 30, city: "New-York" };
function hasKey(obj, key) {
    for (let prop in obj) {
        if (prop === key) {
            return true;
        }
    }
    return false;
}
console.log(hasKey(personn, keyToCheck));

// exercise 3

const obj = { prop1: "Hello", prop2: "World", prop3: "!" };
function unite(obj) {
    let i = 0;
    let result = ""; 
    const values = Object.values(obj);
    do {
        result += values[i];
        i++;
    } while (i < values.length);
    return result;
}
console.log(unite(obj));

// exercise 4

const input = "Hello world, my name is Albert";
function countVowels(str) {
    const vowels = "eoaiA";
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (vowels.includes(str[i])) {
            count++;
        }
        i++
    }
    return count;
}
console.log(countVowels(input));

// exercise 5

const inputt = { John: [8, 7, 9], Mary: [9, 9, 10], Alex: [6, 8, 7] };
function classification(grades) {
    const result = {};
    for (let student in grades) {
        const scores = grades[student];
        const average = (scores.reduce((sum, score) => sum + score, 0) / scores.length).toFixed(2);
        result[student] = `medium: ${average}`;  
    }
    return result;
}
console.log(classification(inputt));

// exercise 6

const inputtt = "Hello, world!";
function reverseString(str) {
    let reversed = ''; 
    let i = str.length - 1;
    do {
        reversed += str[i];
        i--;
    } while (i >= 0);
    return reversed;
}
console.log(reverseString(inputtt));

// exercise 7

const inputttt = "level";
function palindrome(str) {
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(palindrome(inputttt)); 
