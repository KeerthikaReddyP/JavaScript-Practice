const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P1 Success"), 5000);
    // setTimeout(()=>reject("P1 Failed"), 5000);
});

const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P2 Success"), 1000);
    // setTimeout(()=>reject("P2 Failed"), 1000);
});

const p3=new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("P3 Success"), 3000);
    // setTimeout(()=>reject("P3 Failed"), 3000);
});


Promise.all([p1,p2,p3])
    .then(res=>console.log(res))
    .catch(err=>console.error(err));