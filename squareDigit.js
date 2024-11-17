const squareDigits = (num) => {
    // return Number(num.toString().split('').map(ele => ele * ele).join(''));
    return Number(num.toString().split('').map((e) => e * e).join(''));
};

console.log(squareDigits(2112)); // 4114
console.log(squareDigits(3212)); // 9414
console.log(squareDigits(9159)); // 8112581
