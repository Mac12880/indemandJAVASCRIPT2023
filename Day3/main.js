// yearInput = Number(prompt("Input year"));

// if(yearInput % 4 == 0){
//     if(yearInput % 100 == 0){
//         if(yearInput % 400 == 0){
//             console.log("Year " + yearInput + " is a leap year");
//         }
//         else{
//             console.log("Year " + yearInput + " is a not a leap year");
//         }
            
//     }
//     // else if(yearInput % 4 == 0){
//     //     console.log("Year " + yearInput + " is a leap year");
//     // }
//     else{
//         console.log("Year " + yearInput + " is a not a leap year");
//     }
    
// } 
// else{
//     console.log("Year " + yearInput + " is not a leap year");
// }



//divisible by 100 leap year        divisible by 400

// let yearInput = Number(prompt("Input your chosen year:"));

// if(yearInput%4 == 0 || (yearInput%100 == 0 && yearInput%400 == 0)){
//     console.log("Year " + yearInput +" is a leap year")
// }else{
//     console.log("Year " + yearInput +" is not a leap year")
// }

// let yearInput = prompt("Enter a year:");

// if ((yearInput % 4 === 0 && yearInput % 100 !== 0) || yearInput % 400 === 0) {
//   console.log("Year ${yearInput} is a leap year");
// } else {
//   console.log("Year ${yearInput} is not a leap year");
// }

// const cycleArr = ["Eat", "Code", "Sleep", "Repeat"];

// let secondElement = cycleArr[1];

// console.log(secondElement);


// const cycleArr = ["Eat", "Code", "Sleep", "Repeat"];

// let sortElem = cycleArr.sort();
// console.log(sortElem);


// const car = {

//   carName: "Handa City",

//   carType: "Sedan",

//   transmission: "AT",

//   isNew: true

// };

// console.log(car.carType);

// const student = {

//   Name: "Juan",

//   age: 18,

//   year: "4th",
// };

// console.log(`${student.Name} is ${student.age} years old and currently a ${student.year} year student.`);

const cycleArr = ["Eat", "Code", "Sleep", "Repeat"];

let removeElem = cycleArr.pop();
console.log(cycleArr);