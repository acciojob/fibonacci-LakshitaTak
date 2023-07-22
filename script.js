// 0,1,1,2,3,5
function fibonacci(num) { // =2
	if(num < 2){
		return num
	}
	let res = fibonacci(num-1) + fibonacci(num-2) // fib(3) + fib(2) = 1 + 1 =2
	return res
}

module.exports = fibonacci;
