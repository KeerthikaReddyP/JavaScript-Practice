// Illegal Shadowing

let a=10;
{
    var a=100; //Syntax error : Identifier 'a' has already been declared.
}
// We cannot redeclare like this. It is known as illegal shadowing.


// But we can do this-->
let b=20;
{
    let b=200;
}

// And this -->
var c=30;
{
    let c=39;
}

/*
    Because, if something is shadowing the other, it should not cross the boundary of that thing's scope.
    If var a=100 in line 5 is shadowing let a=10 in line 3, it shouldn't cross the boundary of it's scope.
*/

// What is the boundary of 'var'?
// var is function scoped.
let x=10;
function y(){
    var x=100;
}
//This won't give error.
//Because, this var is inside it's boundaries.
//It is not interfering with that x(line 29)