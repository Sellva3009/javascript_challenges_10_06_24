const solution = (number) => {
    let count = 0;
  for (let i = 1; i < number; i++) {
    if (i%3 === 0 && i%5 === 0) {
        count = count + i;
    } else if (i % 3 === 0) {
        count = count + i;
    } else if (i%5 === 0) {
        count = count + i;
    }
  }
  console.log(count);
};

// alternate solutions

// let sum = 0;
// for (let i = 3; i < number; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     sum += i;
//   }
// }
// return sum;

solution(0); // 0
solution(-15); // 0
solution(10); // 23
solution(20); // 78
solution(200); // 9168

// iterate over all the numbers
// seperate out the number divisible by 3
// seperate out the number divisible by 5
// adding those numbers
