// Corner cases in closure

// Garbage collection when closure is formed

function a(){
    var x=10;
    var y=20;
    function b(){
        console.log(x);
    }
    return b;
}

a()();

// This is interesting.

// When we're returning the function b, closure is formed.
// Closure of a is formed, but it only has the reference to variable 'x' as x is only used in the function b
// variable y is garbage collected.

// CLosure is formed only with what are necessary. Hence, no memory is used unnecessarily.