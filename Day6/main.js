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

// Set Timeout
// setTimeout(() => {
//   console.log("Hello!");
//   setTimeout(() => {
//     console.log("Bye!");
//   }, 3000);
// }, 3000);

// Set Interval
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

//Array.Find
// const ages = [10, 16, 22, 24, 11];
// function checkAge(age) {
//   return age > 18;
// }
// function myFunction() {
//   return ages.find(checkAge);
// }
// console.log(myFunction());

//every()

// const words = ["pop", "pip", "log", "poe"];//true
const words = ["pop", "pip", "log", "calls"];//false
const test = words.every(word => {
  return word.length === 3;
});
console.log(test);


