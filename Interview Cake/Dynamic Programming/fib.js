/*
Write a function fib() that takes an integer nnn and returns the nnnth Fibonacci ↴ number.

Let's say our Fibonacci series is 0-indexed and starts with 0. So:

  fib(0);  // => 0
fib(1);  // => 1
fib(2);  // => 1
fib(3);  // => 2
fib(4);  // => 3
...
*/

function fib(n) {
  if (n < 0) {
    throw new Error('That is not a postive number!');
  } else if (n === 0 || n === 1) {
    return n;
  }

  let lowFib = 0;
  let highFib = 1;
  let temp;

  for (let i = 2; i <= n; i++) {
    temp = highFib;
    highFib = highFib + lowFib;
    lowFib = temp;
  }

  return highFib;
}

console.log(fib(0) === 0);
console.log(fib(1) === 1);
console.log(fib(2) === 1);
console.log(fib(3) === 2);
console.log(fib(4) === 3);
console.log(fib(5) === 5);
console.log(fib(6) === 8);
console.log(fib(7) === 13);
console.log(fib(8) === 21);
console.log(fib(9) === 34);
console.log(fib(10) === 55);