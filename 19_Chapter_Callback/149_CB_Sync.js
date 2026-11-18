let testResults = ["Pass","Fail","Pass","Skip"];

testResults.forEach(function(result,index){
        console.log("Test", index, result);
});

// let runScored = [12,34,46,0, 102];
// runScored.forEach(function(run, batsman){
//     console.log("Batter", batsman ,run )
// })


// let testResults = ["Fail", "Pass", "Fail", "DidnotAppear"];
// testResults.forEach(function(result,index){
//     console.log("Test", index, result)
// })
// "All done" prints LAST because forEach is synchronous — it finishes all 4 iterations first, then moves on.