//Scope (place/part of the program where you can access a variable or a function)

function a(){
    var b=10;
    function c(){

    }
    c();
}
a();


//What is the scope of variable 'b'? (i.e., Where can I access this variable 'b'?)
//Is 'b' inside the scope of function 'c'? (Can I access this 'b' inside the function 'c'?)