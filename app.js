const cart = ["shoes", "ribbons", "bottle"];

createOrder(cart, function () {
  proceedToPayment(orderId);
});

/*
    Limitations of using callbacks
        1. Callbak hell 
        2. Inversion of control
*/
/*
    If we have callback inside a callback inside a callback and so on, it creates callback hell. Pyramid of Doom.
    - Our code grows horizontally, instead of vertically
    - It becomes unreadable and unmaintanable
*/
/*
    Inversion of control : 
        - As we're passing our callback function to another function, we're losing control of it.
        - We're blindly trusting the function to which we've given our callback function.
        - createOrder function might be written by some other developer, or some intern
            and we've give control of our proceedToPayment callback to createOrder.
            We don't know what's inside createOrder
            It might not call our proceedToPayment function, or it might call it twice, or it might misuse it
        - We just don't have the control over our callback function.
*/