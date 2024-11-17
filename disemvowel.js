const disemvowel = (str) => {
  // Let's use regular expressions (regex)
  return str.replace(/[aeiou]/gi, "");
};

console.log(disemvowel("This website is for losers LOL!")); // 'Ths wbst s fr lsrs LL!'
