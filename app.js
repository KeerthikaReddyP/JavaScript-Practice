//Promises

const orderDetails=createOrder(cart);

orderDetails.then(function(){
    proceedToPayment(orderId);
});

// Here we're attaching(not passing) our callback to orderDetails promise.
// JS ensures that our callback function is called for sure, and called only once.
// And our code is in our control.

//createOrder returns a promise.

//This way, we're avoiding both callback hell and inversion of control.