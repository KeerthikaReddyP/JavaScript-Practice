const prom=new Promise(function(resolve,reject){
    resolve("Promise resolved value");
});

// function getData(){
//     prom.then(res=>console.log(res));
// }
// getData();


async function getData(){
    const val=await prom;
    console.log(val);
}
getData();

//async await combo is used to handle promises.
//await is a keyword that is used only inside async function