const p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise-1 resolved");
    },3000);
});

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise-2 resolved");
    },5000);
});

async function handlePromise(){
    console.log("Hello world!");
    //JS engine prints hello world and as it sees await in the next line, it'll remove fro the call stack.
    //when promise is settled, it'll again pop up in call stack and execute from where it is left.
    const val1=await p1;
    console.log("Namaste promise");
    console.log(val1);

    //Here again, if the promise is settled, it'll directly execute the remaining code.
    //If the rpomise isn't settled, it will again removed from the call stack till the promise is settled.
    //Once the second promise is settled, it'll popup again and execute from remaining code where it is left.
    const val2=await p2;
    console.log("Namaste promise");
    console.log(val2);
}
handlePromise();