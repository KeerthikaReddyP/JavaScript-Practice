// Creating promise

// const cart=["shoes","bag","bread"];

// const promise=createOrder(cart); // orderId

// promise.then(function(){
//   proceedToPayment(orderId);
// })

//=========================================================

//Creating our own promise

function createOrder(cart){

    const prom=new Promise(function(resolve,reject){
        //Logic
    });

    return prom;
}

// Here, we're creating a promise by calling Promise constructor using new keyword
// which takes a function, whose parameters are functions resolve and reject.