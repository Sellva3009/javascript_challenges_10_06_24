const getMiddle = (str) => {
    if (str.length%2 === 0) {
        return [...str].slice((str.length / 2) - 1, (str.length/2) + 1).join('');
    } else if (str.length % 2 !== 0) {
      return [...str].slice(str.length / 2, str.length / 2 + 1).join('');
    }
};

console.log(getMiddle("test")); // 'es'
console.log(getMiddle("testing")); // 't'
console.log(getMiddle("middle")); // 'dd'
console.log(getMiddle("A")); // 'A'
console.log(getMiddle("Selva"));