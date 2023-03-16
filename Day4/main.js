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
function calculateCircle(radius) {
    let perimeter = 2 * Math.PI * radius;
    let area = Math.PI * radius * radius;
    return [perimeter, area];
  }
  
  let radius = prompt("Enter the radius of the circle:");
  
  if (radius === null || radius === "") {
    console.log("You did not enter a valid radius.");
  } else {
    radius = parseFloat(radius);
    let results = calculateCircle(radius);
    console.log("Radius: " + radius);
    console.log("Perimeter: " + results[0]);
    console.log("Area: " + results[1]);
  }

//FunctionD

//FunctionE