// Debouncing

let counter=0;

const getData=()=>{
  // Makes an API call to get data
  console.log("Fetching Data", ++counter);
}

function debounce(fn, delay){
  // Debouncing logic (returns a function)
  return function(){
    
  }
};

const betterFunction=debounce(getData,300);