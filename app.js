const cart = ["shoes", "headset", "cake"];

function validateCart(cart) {
  return false;
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

const pr = createOrder(cart); // This returns a promise

pr.then((orderId) => console.log(orderId))
  .catch((err) => console.log(err.message));

//This will give red color error in console, because we didn't handle it.
// We should handle errors gracefully.
// Using .catch method
