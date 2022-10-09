//using iteration
const fibs = (n) => {
  let fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
  }
  return fibonacci;
};

console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]

//using recursion
const fibsRec = (n, fib = [0, 1]) => {
  if (fib.length == n) {
    return fib;
  } else {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fibsRec(n, fib);
};

console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
