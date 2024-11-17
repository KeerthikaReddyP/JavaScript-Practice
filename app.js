// Corner cases in closure

// Accessing variables from one more deeper level

function a(){
    var x=10;
    function b(){
        var y=100;
        function c(){
            console.log(x,y);
        }
        c();
    }
    b();
}
a();

// Here, we're trying to print x and y, both from c's parent and it's parent's parent.
// Two closures of formed in this case.
// Closure of a, which contains x & closure of b, which contains y values

// Even if we rreturn the function c, these values still exist and not garbage collected.