//async always returns a promise

async function getData(){
    return "Namaste"; //If we do not return a promise, it'll wrap our value into a promise and returns it.
}

const dataPromise=getData();
console.log(dataPromise);

dataPromise
    .then(res=>console.log(res));