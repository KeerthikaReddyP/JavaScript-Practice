const cart = ["shoes", "headset", "cake"];

function validateCart(cart) {
  return true;
}

function createOrder(cart) {
  const prom = new Promise(function (resolve, reject) {
    //create order logic
    //Validate cart
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }

    const orderId = 123456;
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });

  return prom;
}

function proceedToPayment(orderId){
  return new Promise((resolve,reject)=>resolve("Payment successful"));
}

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo)=>console.log(paymentInfo))
  .catch((err) => console.log(err.message));
