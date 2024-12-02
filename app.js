"use strict"
// 'this' keyword

// In global space, this keyword points to global object(Global object is window incase of browsers)
console.log(this);


// Inside functions
function x(){
  console.log(this); // undefined in strict mode. window in non strict mode
}

// this substitution
// If the value of this is undefined or null, it'll be substituted by global this(i.e., window object)
// in non-strict mode


// Based on how the function is called
x(); // undefined
window.x(); // window


// Inside object's method
const obj1={
  a: 10,
  x:function(){
    console.log(this);
  }
};

obj1.x(); // refers to the object(obj1) itself