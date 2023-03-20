//map
// const fullName = [
//   {
//       first: "Martin",
//       last: "Juan"
//   },
//   {
//       first: "Kyle",
//       last: "Reyes"
//   },
//   {
//       first: "Aaron",
//       last: "Rubio"
//   },
//   {
//       first: "Mark",
//       last: "Balala"
//   },
//   {
//       last: "Samolde"
//   },
// ];

// const firstName = fullName.map(function(name){
//   return name.first;
// })

// console.log(firstName);

// lesser
// const string = (str) => {str};

// Implicit return
// const string = (str) => str;
// const add = (a, b) => a+b;


// const isEven = function(num) { // Regular Function Expressions 
//   return num % 2 === 0;
// }

// const isEven = (num) => { // Arrow Function with parenthesis around the argument
//   return num % 2 === 0;
// }

// const isEven = num => { // Arrow Function with no parenthesis around the argument(for single argument only)
//   return num % 2 === 0;
// }

// const isEven = num => { // Implicit Return
//   num % 2 === 0
// }

// const isEven = num => num % 2 === 0; // One-liner with Implicit Return

// Set Timeout (delays)
// setTimeout(() => {
//   console.log("Hello!");
//   setTimeout(() => {
//     console.log("Bye!");
//   }, 3000);
// }, 3000);

// Set Interval (loop, ends with clearTimeout())
// const id = setInterval(() => {
//     console.log(Math.random());
//   }, 1000);
// setTimeout(() => {
//   clearTimeout(id)
// },8000)

// Array filter
// const highGpa = students.filter(student => student.gpa > 90);
// const lowGpa = students.filter(student => student.gpa <= 90);
// const lowGpaNames = lowGpa.map(stud => stud.studentName);

//Array.Find (gets the first element to satisfy the expression)
// const ages = [10, 16, 22, 24, 11];
// function checkAge(age) {
//   return age > 18;
// }
// function myFunction() {
//   return ages.find(checkAge);
// }
// console.log(myFunction());

//every (only 1 doesn't match == false, all satisfies == true)
// // const words = ["pop", "pip", "log", "poe"];//true
// const words = ["pop", "pip", "log", "calls"];//false
// const test = words.every(word => {
//   return word.length === 3;
// });
// console.log(test);

//some (only 1 satisfies == true, no satisfies == false)
// // const words = ["pop", "pip", "log", "poe"];//false
// const words = ["pop", "pip", "log", "calls"];//true
// const test = words.some(word => {
//   return word.length >= 4;
// });
// console.log(test);

//JS Arrow Function #1
// const greeter = (name) => {
//   return `Hello, ${name}!`;
// }
// console.log("Test Case 1:")
// console.log(greeter("AJ"))
// console.log("Test Case 2:")
// console.log(greeter("Aldrin"))

//JS Arrow Function #2
// const arrAverage = (arr) => {
//   let arrtotal = 0
//   for(let i = 0; i < arr.length; i++){  
//     arrtotal = arrtotal + arr[i];
//   }
//   return arrtotal/arrAverage.length;
// }
// const arr1 = [6, 7, 8, 9, 10];
// const arr2 = [98, 99, 75, 80];
// console.log("Test Case 1:")
// console.log(arrAverage(arr1));
// console.log("Test Case 2:")
// console.log(arrAverage(arr2));

//JS ForEach #1
// const array = ['Person1', 'Person2', 'Person3'];
// array.forEach((arr) => {
// console.log(arr);
// });

//JS ForEach #2
// let arr = ['element1', 'element2', 'element3'];
// let copyArr = [];
// arr.forEach((array) => {
//   let shift = arr.shift();
//   let push = copyArr.push(shift);
// });
// console.log(copyArr);

//JS map #1
// const array = [6, 7, 8, 9];
// const square = array.map(x => x * x);
// console.log(square)

//JS map #2
const array = [2, 5, 100];
const double = array.map(x => x * 2);
console.log(double)