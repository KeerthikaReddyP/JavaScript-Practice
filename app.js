// SHADOWING

var a=100; // attached to global object
let b=200; // Stored in Script

{
    var a=10; // global object
    let b=20; // stored in block space
    const c=30;

    console.log(a); // 10
    console.log(b); // 20
    console.log(c);
}

console.log(a); // 10 --> bcz, a in the first line is shadowed by a inside the block
console.log(b); // 200 --> let is block scoped. so it gets stored in separate memory space.