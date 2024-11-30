// PROMISE APIs

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1 rejected"), 3000);
});

const p2=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p2 resolved"),1000);
});

const p3=new Promise((resolve,reject)=>{
  setTimeout(()=>resolve("p3 resolved"),5000);
});

Promise.allSettled([p1,p2,p3])
  .then(val=>console.log(val));

//Returns array of hree responses, doesn't matter fulfilled or rejected