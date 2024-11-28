// PROMISE APIs

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1 resolved"), 3000);
});

const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p2 resolved"),1000);
});

const p3=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p3 resolved"),5000);
});

Promise.all([p1,p2,p3])
  .then((values)=>console.log(values));


/*
  Promise.all takes an iterable (array in an iterable, we mostly use arrays)
  and returns a promise 
  whose value is an array of all the success values of all the promises sent.

  This will return only if all promises are resolved.
  And only after all promises are resolved. (After 5 secs in above case)
*/