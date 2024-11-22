// PROMISE

const GITHUB_API_URL="https://api.github.com/users/KeerthikaReddyP";

const promise= fetch(GITHUB_API_URL);

console.log(promise);

promise.then(data=>console.log(data));

// A promise is an object representing eventual completion/rejection of any asynchronous operation.
/*
    fetch method returns a promise.
    Here, it is fetching data fro github users api.
    - As it is an asynchronous operation, we don't know how much it'll take.
    - By the time it gets any data, it's value is undefined.
    
    - This promise , once resolved, gets populated with data.
    - It has promise state and promise response

    - And once the promise is resolved(success/failure), our callback function which is attached to it using
        .then() method gets called
    - Hence, we've control over our code and we know what our callback is upto.

    - Promise only has 3 states. Pending, fulfilled and rejected.
*/
/*
    The response from promise is readable stream. We cannot directly read it. But we can covert it into json.
*/