function sum(a, b) {
    return a + b;
}

function task(fn, a, b, cb) {
    setTimeout(() => {
	    let m = fn(a, b);
	    cb(m); //call cb at the end. cb returns fn (sum) 
	}, 3000);
}
console.log("Hello");
task(sum, 5, 3, (result) => {
	console.log(result);
    });

console.log("World")