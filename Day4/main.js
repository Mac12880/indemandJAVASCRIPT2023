//ForLoopA
// for(let x = 0; x < 10; x++){
//     console.log(x)
//     }

//ForLoopB
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];
// for(let x = 0; x < nums.length;x++){
// console.log(nums[x])
// }

//ForLoopC
// for(let i = 20; i>= 11;i--){
//     console.log(i)
//     }

//WhileLoopA
// let num = 0
// while(num < 10){
// console.log(num)
// num++;
// }

//WhileLoopB
// let num = 0;
// while (num < 10) {
// console.log(num);
// num+=2;
// }

//FunctionA
// function myFunc(name){
//     console.log(name);
//     }
    
//     let myname = myFunc(prompt("Enter Name: "));

//FunctionB
// function celsiusToFahrenheit(celsius) {
//   let fahrenheit = (celsius * 9/5) + 32;
//   return fahrenheit;
// }

// let celsius = celsiusToFahrenheit(prompt("Enter Celsius: "));
// let fahrenheit = celsiusToFahrenheit(celsius);

// console.log(celsius + "°C is " + fahrenheit + "°F");

//FunctionC
// function calculateCircle(radius) {
//     let perimeter = 2 * Math.PI * radius;
//     let area = Math.PI * radius * radius;
//     return [perimeter, area];
//   }
  
//   let radius = prompt("Enter the radius of the circle:");
  
//   if (radius === null || radius === "") {
//     console.log("You did not enter a valid radius.");
//   } else {
//     radius = parseFloat(radius);
//     let results = calculateCircle(radius);
//     console.log("Radius: " + radius);
//     console.log("Perimeter: " + results[0]);
//     console.log("Area: " + results[1]);
//   }

//FunctionD wrong
// function generateRNumber(start, end) {
//     let random = Math.floor(Math.random() * (end - start + 1)) + start;
//     return random;
//   }
  
//   let start = prompt("Enter the start of the range:");
//   let end = prompt("Enter the end of the range:");
  
//   if (start === null || end === null || start === "" || end === "") {
//     console.log("You did not enter a valid range.");
//   } else {
//     start = parseInt(start);
//     end = parseInt(end);
//     }
//     if (isNaN(start) || isNaN(end)) {
//       console.log("You did not enter valid numbers.");
//     } else {
//       let random = generateRandomNumber(start, end);
//       console.log("Random number between " + start + " and " + end + ": " + random);
//     }
//       function generateRandomNumber(start, end) {
//     let random = Math.floor(Math.random() * (end - start + 1)) + start;
//     return random;
//   }
  
//   let start = prompt("Enter the start of the range:");
//   let end = prompt("Enter the end of the range:");
  
//   if (start === null || end === null || start === "" || end === "") {
//     console.log("You did not enter a valid range.");
//   } else {
//     start = parseInt(start);
//     end = parseInt(end);
//     if (isNaN(start) || isNaN(end)) {
//       console.log("You did not enter valid numbers.");
//     } else {
//       let random = generateRNumber(start, end);
//       console.log("Random number between " + start + " and " + end + ": " + random);
//     }
//   }

//FunctionE
function factorial(num) {
    if (num < 0) {
      return undefined;
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  let input = prompt("Enter a number:");
  
  if (input === null || input === "") {
    console.log("You did not enter a valid number.");
  } else {
    input = parseInt(input);
    if (isNaN(input)) {
      console.log("You did not enter a valid number.");
    } else {
      let result = factorial(input);
      if (result === undefined) {
        console.log("Factorial is undefined for negative numbers.");
      } else {
        console.log("Factorial of " + input + " is " + result);
      }
    }
  }