const p=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise resolved");
    },5000);
});

async function handlePromise(){
    //JS Engine seems to wait till promise is settled
    const val1=await p;
    console.log("Namaste promise");
    console.log(val1);

    const val2=await p;
    console.log("Namaste promise2");
    console.log(val2);
}
handlePromise();