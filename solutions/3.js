/* Largest Prime factor */

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}

function largestPrimeFactor(number) {
  let largestFactor = 0;
  for (let j = 1; j <= Math.sqrt(number); j++) {
    if (number % j === 0) {
      if (j > largestFactor) {
        if (isPrime(j)) {
          largestFactor = j;
        }
      }
    }
  }
  console.log(largestFactor);
}

largestPrimeFactor(600851475143);
