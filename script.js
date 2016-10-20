function sum(a, b) { return a + b; }
function task(fn, a, b, cb) {
    setTimeout(() => {
	    cb(fn(a, b));
	}, 1000);
}

task(sum, 5, 3, result => {
	console.log(result);
    });
