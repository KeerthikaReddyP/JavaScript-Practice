

let a=10;
{
    let a=100;
    var b=30;
}
function abc(){
    var c=100;
}
abc();
console.log(c);

//'var' is function scoped.
// We cannot access it outside of the function it is been declared in.
// But if it is declared inside a block, it gets attached to the global object(immediate parent of the block).
//  (If the block is defined inside a function, var is accessible only inside that function. It wont get attached to global object. It gets attached to the function's local memory space.)
//    Hence we can access it outside the block in which it is declared.