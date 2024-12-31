// Debouncing

let counter=0;

const getData=()=>{
  // Makes an API call to get data
  console.log("Fetching Data", ++counter);
}

function debounce(fn, delay){
  // Debouncing logic (returns a function)
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer=setTimeout(()=>{
      fn.apply(this,args);
    },delay);
  }
};

const betterFunction=debounce(getData,300);