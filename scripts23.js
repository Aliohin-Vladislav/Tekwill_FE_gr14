// Exercise 1

let fruits = [];
fruits.push("apple","banana","orange");
console.log(fruits.length);
console.log(fruits);

// Exercise 2

let numbers = [1,2,3,4,5];
numbers.pop();
numbers.shift();
console.log(numbers);

// Exercise 3

let colors = ["red","green","blue","yellow"];
console.log(colors.indexOf("green"));
console.log(colors.includes("orange"));

// Exercise 4

let names = ["John","Jane","Mike","Jennifer"];
names.unshift("David");
console.log(names);
console.log(names.indexOf("Mike"));

// Exercise 5

let number = [2,4,6,8,10];
if (number.includes(5)) {
    console.log("Массив содержит элемент 5");
} else {
    console.log("Массив не содержит элемент 5");
}
number.push(12);
console.log(number);

// Exercise 6

let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
months.sort();
console.log(months);

// Exercise 7

let shortMonths = months.filter(month => month.length > 3);
console.log(shortMonths);

// Exercise 8

let partOfMonths = months.slice(6,11);
console.log(partOfMonths);

// Exercise 9

let specialMonths = months.filter(months => months.length >= 5);
specialMonths.sort();
let line = specialMonths.join("-");
console.log(line);
