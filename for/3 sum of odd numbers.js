let sumOdd = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 === 1) {
    console.log(i);
    sumOdd = sumOdd + i;
  }
}
console.log("The sum of all Odd numbers are: ", sumOdd);

let sumEven = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    console.log(i);
    sumEven = sumEven + i;
  }
}
console.log("The sum of all even numbers are: ", sumEven);
