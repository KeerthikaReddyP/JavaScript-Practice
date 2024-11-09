//Global scope

var a=10;
let b=20;
const c=30;

function abc(){
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30

    console.log(window.a); //10
    console.log(window.b); //undefined
    console.log(window.c); //undefined
}

abc();

// 'var' is globally scoped and attached to the window object.
// 'let' and 'const' are globally scoped but not attached to the window object.