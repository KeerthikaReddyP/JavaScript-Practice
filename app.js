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

/*
    When the program is run, a global execution context is created and pushed into the call stack.
    In the first phase, it allocates memory to the variables and functions.
    Memory is assigned to function 'a'.
    In the second phase , which is code execution phase, it executes the code.
    At the 11th line, there's function invocation. So a new execution context is created for 'a' and pushed into the call stack.
    The same process of memory allocation and code execution repeats.
    Memory is allocated to variable b and function c.
    At the line 9, again a new execution context is created and pushed into the stack.

    At the 7th line, we are trying to console log the variable 'b'.
    So, it first checks inside the local memory space of c's execution context.
    (When an exec context is created, a reference to it's parent's lexical environment is also created.)
    It isn't there. So it goes to it;s parents' lexical environment, which is a.
    It checks there and prints.

    Each execution context has a reference to it's parent's lexical environment.
    Local memory space along with it's parent's lexical environment is lexical environment of thet function or exec context.

*/

/*
    Assume variable 'b' is not declared anywhere in the program.
    It first checks in the local memory of c, then goes to it's parent's lexical environment which is 'a'.
    It then goes to it's parent's lexical env which is global execution context.
    It's still not there. So it goes to global execution context's lexical environment, which is pointing to NULL.
    Then it gives us error saying 'b' is not defined.

    And this whole chain of references to their parent's lexical environmnet is known as the SCOPE CHAIN.
*/