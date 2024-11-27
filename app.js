const cart=["shoes","headset","cake"];

function validateCart(cart){
  return true;
}

function createOrder(cart){

  const prom=new Promise(function(resolve,reject){
      //create order logic
      //Validate cart
      //orderId

      if(!validateCart(cart)){
        const err=new Error("Cart is not valid");
        reject(err);
      }
      
      const orderId=123456;
      if(orderId){
        resolve(orderId);
      }
  });

  return prom;
}

const pr=createOrder(cart); // This returns a promise

pr.then(orderId=>console.log(orderId));