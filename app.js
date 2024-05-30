const cart=["shoes","bags","lipstick"];

function createOrder(cart){
    function validateCart(cart){
        //code to validate
        return true;
    }
    return new Promise((resolve,reject)=>{

        //validate cart
        if(!validateCart(cart)){
            const err=new Error("Cart is not valid!");
            reject(err);
        }

        //createOrder
        //generate order ID
        const orderId="12345";
        if(orderId) resolve(orderId);
    });
}

function proceedToPayment(orderId){
    return new Promise((resolve,reject)=>{
        resolve("Payment succeeded");
    });
}
createOrder(cart)
    .then(orderId=>console.log(orderId))
    .catch(err=>console.error(err))
    .then(orderId=>proceedToPayment(orderId))
    .then(res=>console.log(res));