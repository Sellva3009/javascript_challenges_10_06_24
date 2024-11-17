const createPhoneNumber = (numbers) => {
    // return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;

    // alternate solutions
    // const str = numbers.join('');
    // return `(${str.substring(0, 3)}) ${str.substring(3, 6)}-${str.substring(6)}`;

    // using Regex solutions
    return numbers.join("").replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3');
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // '(111) 111-1111'
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // '(123) 456-7890'
