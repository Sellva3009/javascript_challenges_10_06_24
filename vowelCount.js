const getCount = (str) => {
    const string = [...str];
    return string.filter(ele => ['a', 'e', 'i', 'o', 'u'].includes(ele)).length;

    // alternate solution
    // let vowelsCount = 0;
    // for (let char of str) {
    //   if ("aeiou".includes(char)) vowelsCount++;
    // }
    // return vowelsCount;

    // 
    // let vowelCount = 0;
    // string.forEach(element => {
    //     if (element.includes("a" || "e" || "i" || "o" || "u")) {
    //       vowelCount++;
    //     }
    // });
    
    // return vowelCount;
};

console.log(getCount("my pyx")); // 0
console.log(getCount("pear tree")); // 4
console.log(getCount("abracadabra")); // 5
console.log(getCount("o a kak ushakov lil vo kashu kakao")); // 13
