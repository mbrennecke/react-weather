function addPromise (a, b) {
	return new Promise(function (resolve, reject) {
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a+b);
		} else {
			reject("Not a number");
		}	
	})
}

addPromise ('a',2).then(function(sum) {
	console.log(sum);
}, function(err){
	console.log(err);
})