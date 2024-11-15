 let a=10;

 {
    let a=100;
 }

 function abc(){
    let a=20;
    var b=30;

    {
        let c=200;
        var d=300;
    }
 }
 abc();

 //Debugger at line 13
 /*
    Block
        c:200

    Local
        a:20
        b:30
        d:undefined

    Script
        a:10

    Global
 */

/*
    Block [block inside function abc]
        c:200 (line 12 : let c=200)

    Local [function abc's local memory space]
        a:20 (line 8 : let a=20)
        b:30 (line 9 : var b=30)
        d:undefined (line 13 : var d=300)
        Even though d is declared inside the block inside function abc,it is in the local memory space(outside block) because, var is function scoped(let and const are block scoped).

    Script [separate memory space for let and const]
        a:10 (line 1 : let a=10)

    Global [global memory space]
 */