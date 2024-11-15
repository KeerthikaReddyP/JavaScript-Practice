//CONST
/*
    'const' is very much similar to 'let'.
    But, it's even more strict.
        It behaves the same way in hoisting. (stored in a separate memory space. temporal dead zone)
    In case of 'const', initialization and declaration should be done at the same time.
*/

let a; // Initialization
a=10; // Declaration
console.log(a); //10



const b; //SyntaxError : missing initilizer in const declaration

let x=10;
x=100;    //possible

const y=20;
y=200;    // Type Error : Assignment to constant variable