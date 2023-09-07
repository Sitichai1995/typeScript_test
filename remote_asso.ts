function getQuestionPart(phrases:string[]):string[] {
  // Find the substring
  let substring:string = "";
  const firstWord = phrases[0]; // for ref

  for (let i = 0; i < firstWord.length; i++) {
    //collect slice word for check
    const checkWord = firstWord.slice(0, i + 1);
    //search a checkWord in phrases
    if (phrases.every(word => word.includes(checkWord))) {
      substring = checkWord;
    } else {
      break;
    }
  }

  // Create array to collect words
  const resultArray = phrases.map(word => word.replace(substring, ''));

  return resultArray;
 }

const inputArray = ["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"];

console.log(getQuestionPart(inputArray))