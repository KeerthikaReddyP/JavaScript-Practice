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