let a = { status: "fail" };
let b = a;  //Copy the reference and can be accessed later
b.status = "pass";
console.log(a.status);