'use strict';
const memo = new Map();
memo.set(0,0); // 0番目の値は0(初期値）
memo.set(1,1); // 1番目の値は1(初期値）
function fib(n) {
	if (memo.has(n)){
		return memo.get(n);
	}
	const value = fib(n-1) + fib(n-2);
	memo.set(n, value);
	return value;
}

const length = 40;
for (let i = 0; i <= length; i++) {
	console.log(fib(i));
}
