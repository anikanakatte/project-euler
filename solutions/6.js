/* Sum Square Difference */

function sumSquareDifference(n) {
  let sumOfSquares = 0,
    sum = 0,
    squareOfSum;

  for (let i = 1; i <= n; i++) {
    sumOfSquares += i * i;
    sum += i;
  }

  squareOfSum = sum * sum;

  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDifference(100));
