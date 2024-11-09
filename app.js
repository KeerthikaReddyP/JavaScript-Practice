// Local scope

// Function scope

function abc(){
    var a=10;
    let b=20;
    const c=30;

    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
abc();
console.log(a); //Error : a is not defined (function scope)


// Block scope
function xyz(){
    if(true){
        var x=10;
        let y=20;
        const z=30;
    }
    
    console.log(x); //10
    console.log(y); //Error : y is not defined (Block scope)
    console.log(z);
}
xyz();
console.log(x); // Error : x is not defined (function scope)


//'var' variable is function scoped.
// 'let' and 'const' are block scoped.

// let and const variables cannot be accessed outside the block of where they've been declared.
// var variables cannot be accessed outside the function they've been declared.