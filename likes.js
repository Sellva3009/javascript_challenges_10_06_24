const likes = (names) => {
    const len = names.length;
    let output;
    if (len === 0) {
      output = `no one likes this`;
    } else if (len === 1) {
      output = `${names[0]} likes this`;
    } else if (len === 2) {
      output = `${names[0]} and ${names[1]} likes this`;
    } else if (len === 3) {
      output = `${names[0]}, ${names[1]} and ${names[2]} likes this`;
    } else if (len === 4) {
      output = `${names[0]}, ${names[1]} and 2 others likes this`;
    } 
    return output;
};

console.log(likes([])); // 'no one likes this'
console.log(likes(["Peter"])); // 'Peter likes this'
console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this'
console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this'
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // 'Alex, Jacob and 2 others like this'
