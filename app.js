/*
- In JS, 'this' keyword refers to an object.
- Which object?
    It depends on how 'this' is being invoked(called or used).
*/

// Global level ('this' refers to window object)
console.log(this); //window


// In a function
function fun(){
    console.log(this); //window
}
fun();


// In an object's property(naam)
var myObject={
    naam : this
}
console.log(myObject.naam); //window


// In a method
var myObject1={
    naam: 'Keer',
    myFunc : function(){
        console.log(this); //'this' refers to the object myObject1
    }
}
myObject1.myFunc();

// If we add a method (age) later
myObject1.age=function(){
    console.log(this); //Same. 'this' refers to the object myObject1
}
myObject1.age();