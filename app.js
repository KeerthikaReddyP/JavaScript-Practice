/*
Promise APIs:
    1) Promise.all
    2) Promise.allSettled
    3) Promise.race
    4) Promise.any
*/

//Promise.all takes array of promises
//It'll wait for all the API calls to settle.
// If all promises are fulfilled, it will return an array of promise values.
//If any of them failed, it'll return the error and do not wait for others to settle. (Fail fast)

//Promise.allSettled
//Same as promise.all for all success case
//If any of them fails, it still waits for all them to settle and returns an array with respective values and errors

//Promise.race
//returns the first settled value
//Doesn't care whether it is fulfilled or rejected

//Promise.any
//returns the first fulfilled value (first settled success)
//If all of them fails, it will give an Aggregate Error (Array of all errors)