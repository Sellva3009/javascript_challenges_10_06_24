const findShort = (str) => {
  // Your solution
  const countWords = str.split(' ');
    // countWords.sort(function(a, b) {
    //     return a.length - b.length;
    // })

    // console.log(countWords[0].length);

    // alternate solution
    // const shortest = countWords.reduce(function(a, b) {
    //     return a.length < b.length ? a : b;
    // })

    // console.log(shortest.length);

    // alternate solution
    // let shortest = countWords[0];
    // countWords.forEach(element => {
    //     if(element.length < shortest.length) {
    //         shortest = element;
    //     }
    // })
    // console.log(shortest.length);

    // alternate solution
      return Math.min(...str.split(" ").map((word) => word.length));
};

console.log(findShort("Test where final word shortest see")); // 3
console.log(findShort("Lets all go on holiday somewhere very cold")); // 2
console.log(findShort("i want to travel the world writing code one day")); // 1
