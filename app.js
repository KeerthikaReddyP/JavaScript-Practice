"use strict"
// 'this' keyword

// call method

const student1={
  name:"Keerthika",
  printName:function(){
    console.log(this.name);
  }
}
student1.printName(); // Keerthika

const student2={
  name:"Dileep",
}

// Now can we use printName method for the second object(student2)?
// Yes.

student1.printName.call(student2); // Dileep

// Here, we can do this by overriding the 'this' value of the function printName.
// .call method takes the value of 'this'
// We're passing student2 to .call method, so the value of 'this' will refer to student2.
// Hence Dileep is printed
// Method sharing is done