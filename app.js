const p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise-1 resolved");
    },5000);
});

const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise-2 resolved");
    },3000);
});

async function handlePromise(){
    //JS Engine seems to wait till promise is settled
    const val1=await p1;
    console.log("Namaste promise");
    console.log(val1);

    const val2=await p2;
    console.log("Namaste promise");
    console.log(val2);
}
handlePromise();