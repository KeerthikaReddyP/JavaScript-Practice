const p=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("Promise resolved");
    },5000);
});

async function handlePromise(){
    //JS Engine seems to wait till promise is settled
    const val=await p;
    console.log("Namaste promise");
    console.log(val);
}
handlePromise();