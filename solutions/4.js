function largestPalindromeProduct(number) {
  let largest,
    lowest = "1",
    largestPalindrome = 0;
  while (number > 1) {
    lowest += "0";
    number--;
  }
  largest = parseInt(lowest + "0") - 1;
  lowest = parseInt(lowest);

  for (let i = largest; i >= lowest; i--) {
    for (let j = largest - 1; j >= lowest; j--) {
      product = j * i;
      if (product > largestPalindrome) {
        if (isPalindrome(product)) {
          largestPalindrome = product;
        }
      }
    }
  }
  console.log(largestPalindrome);
}

function isPalindrome(number) {
  let reversedN = 0,
    remainder,
    orginalN;
  orginalN = number;
  while (number != 0) {
    remainder = number % 10;
    reversedN = reversedN * 10 + remainder;
    number = parseInt(number / 10);
  }
  if (orginalN === reversedN) {
    return true;
  } else {
    return false;
  }
}

largestPalindromeProduct(3);
