// PROMISE CHAINING

//The problem with using callbacks is callback hell or pyramid of doom.

createOrder(cart, function () {
  proceedToPayment(orderId, function () {
    showOrderSummary(paymentInfo, function () {
      updateWallet();
    });
  });
});
// This is not readable and maintainable.
// As code grows, & if we have even more if,else, for loops, it'll become even more complicated.
// And we don't know which API is getting called where, and the result.
// Code is growing horizontally instread of vertical.


// Using promises

createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function () {
    return updateWallet();
  });
// This is known as promise chaining.
// One common mistake - not writing return
// One must return the callback to ensure the flow of promise chain. Else, it will throw error, or stuck somewhere.


// We can also use arrow functions.
// This will make code even more leaner and readable.
createOrder(cart)
  .then(orderId=>proceedToPayment(orderId))
  .then(paymentInfo=>showOrderSummary(paymentInfo))
  .then(()=>updateWallet());