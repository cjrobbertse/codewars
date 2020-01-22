function high (x) {
  if (x === '' || x === null || x === ' ' || x === '  ') {
    return '';
  }
  // console.log('should not get here');

  try {
    let wordArray = x.split(' ');
    let scores = [];

    wordArray.forEach(word => {
      let wordScore = 0;
      word.split('').forEach(letter => {
      // get ascii code
        let ascii = letter.charCodeAt(0);
        // add ascii val - 96 to word score
        wordScore += ascii - 96;
      });
      scores.push(wordScore);
    });

    // find index of highest score
    let highest = 0;
    let index;
    scores.filter((score, i, array) => {
      if (score > highest) {
        highest = score;
        index = i;
      }
    });
    return wordArray[index];
  } catch (error) {
    return '';
  }
}

console.log(high(' '));
