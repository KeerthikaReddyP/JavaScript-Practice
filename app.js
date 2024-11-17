// CLOSURE

function x(){
    var a=3;
    function y(){
        console.log(a);
    }
    return y;
}
var z=x();
z();

/*
    Here, we're returning the function 'y' from 'x'. It no longer resides inside 'x'.
    In line 10, we have fuction 'y'.
    'z' has this function 'y'.
    How will this(function y) behaves outside the scope?

    In line 11, we're calling z.
    Assume there are more lines of code and we're calling z somewhere later in the program.
    What will it print?
    'a' is not attached to global object and function 'x's execution context is pushed out of the stack.
    It prints the value of a.
    How?

    Here comes closure into picture.
    Functions, even when they are returned from another function, they still maintain their lexical scope.
    They remember where they were actually present.

    Though 'x' no longer exists. Nothing is there.
    But still, this 'y' function remembers its lexical scope where it came from.


    When a function is returned, not just the function is returned. But its closure was returned.
    Function, along with its lexical scope was returned.
    Closure was returned and stored in 'z'. So when we execute 'z' later in our program, it still remembers the reference to 'a'.
*/

//Function bundled with it's lexical environment is known as closure.

/*
    A closure is the combination of a function bundled together(enclosed) with
    references to its surrounding state(the lexical environment).

    A closure gives you access to an outer function's scope from an inner function.
*/
