// console.log("hello, world!");

const userName = "Giorgi";
const minAge = 20;
const USER_ROLE = "guest";

// console.log(minAge);

// declaration
let userEmail;

// initialization
userEmail = "test@gmail.com";

// assign
let userPassword = "test1234";
let userRestrictions;

// number
let studentScore = 90;
const infinity1 = 1 / 0; //Infinity
const infinity2 = -1 / 0; //-Infinity
// console.log(infinity1, typeof infinity1);
// console.log(5 + 10); //addition
// console.log(5 - 10); //substraction
// console.log(5 * 10); //multiplication
// console.log(5 / 10); //division
// console.log(5 ** 2); //power
// console.log(5 % 10); //reminder
// console.log(5 / "test"); //NaN   not a number   typeof => number

// console.log(typeof studentScore);

// string
let h1 = document.querySelector("h1");
let studentName = "Nino";
let studentLastName = 'Abashidze "';
let studentFullName = `${studentName} ${studentLastName}`; //template literals
// console.log(typeof studentFullName);
// console.log(h1.innerText);

let studentFullName2 = "student full name is " + studentName + " " + studentLastName;

//boolean    true   false
let isStudentVerified = true;
// console.log(typeof isStudentPresent);

// bigint
const bigNumber = 12341234123123123n;
// console.log(typeof bigNumber);

// symbol
const id1 = Symbol("id");
const id2 = Symbol("id");

// console.log(typeof id1);

// undefined
let userVerified;
// console.log(userVerified, typeof userVerified);
userVerified = true;

// null
let productsList = null;
// console.log(typeof productsList); //object

console.log(isStudentVerified + minAge + userVerified + studentFullName);
console.log(isStudentVerified + studentFullName + minAge + userVerified);
