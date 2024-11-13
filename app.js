//The Scope Chain
//Lexical environment

function a(){
    var b=10;
    function c(){
        console.log(b); //Put a debugger here in the developer tools and check the scope, lexical environment, closure
    }
    c();
}
a();
