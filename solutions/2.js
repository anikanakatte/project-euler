function generateFiboSeries(number) {
  let arr = [1, 2];
  for (let i = 0; i < number - 2; i++) {
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr;
}

function fiboEvenSum(number) {
  let fiboArr = generateFiboSeries(number);
  let sum = 0;
  for (let j = 0; j < fiboArr.length; j++) {
    if (fiboArr[j] % 2 === 0) {
      sum += fiboArr[j];
    }
  }
  console.log(sum);
}

fiboEvenSum(43);
