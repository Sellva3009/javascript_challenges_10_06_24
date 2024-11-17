const evenOrAdd = number => {
    // if (number%2 === 0) {
    //     console.log('Even');
    // } else {
    //     console.log('Odd');
    // }
    // alternate solution
    // number % 2 === 0 ? console.log("Even") : console.log("Odd");

    // alternate solution
    return number%2 === 0 ? 'Even' : 'Odd';
}

// evenOrAdd(0) // 'Even'
// evenOrAdd(2) // 'Even'
// evenOrAdd(3) // 'Odd'
// evenOrAdd(-3) // 'Odd'

console.log(evenOrAdd(0)); // 'Even'
console.log(evenOrAdd(2)); // 'Even'
console.log(evenOrAdd(3)); // 'Odd'
console.log(evenOrAdd(-3)); // 'Odd'