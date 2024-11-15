// Block scope

{
    var a=10;
    let b=20;
    const c=30;
}

// We cannot access let and const outside the block.
// But we can access var.
// bcz, let and const are block scoped and var is function scoped.