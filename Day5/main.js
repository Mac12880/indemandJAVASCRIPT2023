// Define an object called circle which will hold methods that have to 
//do with the geometry of circle it should contain two methods: Perimeter and Area

const circle = {
  perimeter: function(radius){
      return (2 * Math.PI * radius);
      console.log();
  },
  area: function(radius){
      return (Math.PI * radius * radius);
  }
}
circle.perimeter(3);


