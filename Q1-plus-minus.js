// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.

function plusMinus(arr) {
  // Write your code here
  let positiveNum = 0,
    negativeNum = 0,
    zeros = 0;
  for (let element of arr) {
    if (element > 0) positiveNum++;
    else if (element < 0) negativeNum++;
    else zeros++;
  }
  console.log(positiveNum / arr.length);
  console.log(negativeNum / arr.length);
  console.log(zeros / arr.length);
}
