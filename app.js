// Duplicate redeclaration of 'let'

console.log("SOmething"); //Not printed to the console

let a=10;
let a=100;
var a=20;

var b=20;
var b=30; // But we can do it for 'var'

/*
    We cannot redeclare let variables. 
    It gives syntax error.
    It rejects it upfront. No code is run.
    (But in reference error scenario, code is executed upto the line where error is present. It stops at that particular line.)
*/

/*
    Same for 'var'.
    We cannot use the same name in the same scope again.
*/

// We can redeclare 'var' variables but not 'let' and 'const'.
// i.e., We cannot redeclare block-scoped variables.