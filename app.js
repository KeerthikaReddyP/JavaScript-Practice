/*
- Whenever JS program is run, a global object is created known as "window".
- Whenever an execution context is created, 'this' is created.
    - In the global memory space, 'this' refers to the 'window'.
- Simply put, Anything which isn't inside a function or block is in the global space.
- 1. Global scope (Outside of block {})
  2. Local scope
        1. Function scope
        2. Block scope
*/

var a=10;

function b(){
    var c=20;
    console.log(c); //20
    console.log(this.c); //Undefined
}

console.log(window.a);
console.log(a);
console.log(this.a);
// window.a === a === this.a

b();

// console.log(c); //Error