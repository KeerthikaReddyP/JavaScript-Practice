// Hoisting of let and const

console.log(b); // undefined
console.log(a); //Reference Error : cannot access 'a'  before initialization
let a=10;
var b=20;

/*
    Here, even before any line of code is executed, memory is allocated to both 'a' and 'b'.
    But they are stored in different memory spaces.
        - The variable(b) declared using 'var' keyword is attached to the global object.
        - Variable 'a' which is declared using 'let' keyword is stored in a separate memory space(Script).
            They are not on the global object.
*/

/*
    And we cannot access this memory space,
        we cannot access these 'let' and 'const' declarations before we put in some values in them.
        i.e., we cannot access them before initializing.
    This is what hoisting in 'let'.
*/