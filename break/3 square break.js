for (let i = 2; i <= 100; i++) {
  let sqrt = Math.sqrt(i);
  if (sqrt === Math.floor(sqrt)) {
    console.log("First square number found:", i);
    break;
  }
  console.log(i);
}
