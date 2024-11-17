// Corner cases in closure

function x(){
    var a=10;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
x();

//Here we're changing the value of 'a' to 100 in line 8.
// When function is returned, a closure is returned.(Function along with its lexical scope)
// It remembers the reference to 'a'. And not the 'value' of a.
// So, when trying to print later in the program, it's value has already been changed to 100.
// Hence 100 will be printed(not 10).

// This 100 is still in the memory, preserved, because of closure..
// When 'x' was gone, it was not garbage collected. Bcz, it has to be used later.