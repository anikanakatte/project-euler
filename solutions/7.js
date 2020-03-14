/* 10001st Primes */

function nthPrime(n) {
  let primes = [2];
  let isPrime, max;

  for (let i = 3; primes.length < n; i += 2) {
    max = Math.ceil(Math.sqrt(i));
    isPrime = true;
    for (let j = 0; primes[j] <= max; j++) {
      if (i % primes[j] === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes[primes.length - 1];
}

console.log(nthPrime(10001));
