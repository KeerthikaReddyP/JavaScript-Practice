

console.log("Start");

setTimeout(function cb(){
    console.log("Timer");
},5000);


let start=new Date().getTime();
let end=start;
while(end<start+10000){
    end = new Date().getTime();
}

console.log("10 sec pause");


console.log("End");