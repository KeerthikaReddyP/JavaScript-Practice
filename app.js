//Without async await
const prom=new Promise(function(resolve,reject){
    resolve("Promise resolved value");
});

function getData(){
    prom.then(res=>console.log(res));
}
getData();