// CLOSURE

function x(){
    var a=3;
    function y(){
        console.log(a);
    }
    y();
}
x();

//Function bundled with it's lexical environment is known as closure.

/*
    A closure is the combination of a function bundled together(enclosed) with
    references to its surrounding state(the lexical environment).

    A closure gives you access to an outer function's scope from an inner function.
*/
