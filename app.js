
// console.log(a); // Reference error : Cannot access 'a' before initialization
// console.log(b); // undefined
// console.log(x); // Reference error : 'x' is not defined

let a=10;

var b=20;

console.log(window.b); // 20
console.log(window.a); // undefined
console.log(window.x); // undefined

/*
    Here, window.b gives 20 because 'b' is attached to the global object(window object) as it is declared using 'var' keyword.

    But, window.a gives undefined. As 'a' is declared using 'let' keyword, it isn't attached to global object.
    They are maintained in a separate storage - reserved memory space for 'let' and 'const'.
    
    So, it treats 'a' like any other variable which is not even defined in the program(just like 'x')
        and pints undefined.
*/
