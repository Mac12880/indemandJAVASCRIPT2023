// Define an object called circle which will hold methods that have to 
//do with the geometry of circle it should contain two methods: Perimeter and Area

// const circle = {
//   perimeter: function(radius){
//       return (2 * Math.PI * radius);
//       console.log();
//   },
//   area: function(radius){
//       return (Math.PI * radius * radius);
//   }
// }
// circle.perimeter(3);

//JSFunction1
const square = {
  area: function(side){
    return side*side;
  },
  perimeter: function(side){
    return side+side+side+side
  }
}

let size = Number(prompt("Enter Size"))
console.log(`Area = ${square.area(size)}`);
console.log(`Perimeter = ${square.perimeter(size)}`);
