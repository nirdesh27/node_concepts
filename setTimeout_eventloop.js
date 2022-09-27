console.log("start")

setTimeout(()=>{
    console.log("callback");
},5000);

console.log("end");


//settimeout doesn't gauranted call back printed exactly after 5000
//gauranty atleast 5000 milliseconds