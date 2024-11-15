// Duplicate redeclaration of 'let'

console.log("SOmething"); //Not printed to the console

let a=10;

var a=20; // SyntaxError : Identifier 'a' has already been declared.

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