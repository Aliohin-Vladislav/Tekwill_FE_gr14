// Упражнения с тернарным оператором в JavaScript:

let number = 6;
const RESULT = (number % 2 === 0) ? "Чётное" : "Нечётное";
console.log(RESULT);



let isLoggedIn = true;
const AUTH = isLoggedIn ? "Аутентифицирован" : "Не аутентифицирован";
console.log(AUTH);



let price = 100;
let quantity = 200;
let isInStock = true;
const FULLPRICE = isInStock ? price*quantity : "Товар закончился" 
console.log(FULLPRICE);



let year = new Date().getFullYear();
const LEAPYEAR = 
   year = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) 
       ? `${year} год является високосным` : `${year} год не является високосным`;
console.log(LEAPYEAR);


// Упражнения со switch:

let countryCode = 'MD';
let countryName;

switch(countryCode) {
    case 'FR':
        countryName = 'France';
        break;

    case 'US':
        countryName = 'United States';
        break;

    case 'MD':
        countryName = 'Moldova';
        break;

    case 'DE':
        countryName = 'Germany';
        break;

    case 'IT':
        countryName = 'Italy';
        break;
} 
console.log(`Код страны: ${countryCode}; название страны: ${countryName}`);





let point = 75;
let grade;

switch(true) {
    case (point >= 90):
        grade = 'A';
        break;

    case (point >= 80):
        grade = 'B';
        break;

    case (point >= 70):
        grade = 'C';
        break;

    case (point >= 60):
        grade = 'D';
        break;

    case (point >= 50):
        grade = 'F';
        break;
}
console.log(`Оценка: ${grade}`);


// Упражнения на Function:

function TellFortune(N, Z, Y, X) {
    console.log(`You will be ${X} in ${Y}, and will get married to ${Z} with ${N} kids.`);
}
TellFortune(20, "Olivia", "New York", "unemployed");
TellFortune(0, "Charlotte", "Los Angeles", "welder");
TellFortune(1, "Amelia", "San Diego", "electrician");



function CalculatedDogAge(humanage) {
    const DOGAGE = humanage * 7;
    console.log(`Вашей собачке ${DOGAGE} лет в собачьих годах!`);
}
CalculatedDogAge(1);
CalculatedDogAge(2);
CalculatedDogAge(3);


// Бонус:

const CalculationSupply = (age, dailyFood, maxAge=100) => {
   const YEARSLEFT = maxAge - age;
   const FOODAMOUNT = YEARSLEFT * 365 * dailyFood;
   console.log(`Вам понадобится ${FOODAMOUNT} кг еды, чтобы продержаться до глубокой старости ${YEARSLEFT} лет`);
}
CalculationSupply(5, 0.5); 
CalculationSupply(25, 5);   
CalculationSupply(99, 1); 