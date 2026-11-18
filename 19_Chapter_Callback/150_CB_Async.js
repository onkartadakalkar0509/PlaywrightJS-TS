console.log("Test 1 : Started!");

setTimeout(function(){
    console.log("Test 2 : Started!");
}, 5000);

console.log("Test 3 : Started!");

console.log("******************************************")

setTimeout(function(){
    console.log("t1: completed")
},3500);
console.log("t2 : completed");
console.log("t3 : completed");