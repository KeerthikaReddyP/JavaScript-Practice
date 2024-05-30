const prom=new Promise(function(resolve, reject){
    resolve("Promise fulfilled");
});

prom.then(res=>console.log(res));