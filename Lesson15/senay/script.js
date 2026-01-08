/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

console.log("Ex. 1");

function checkPassword(password) {
  if (password.length >= 8) {
    console.log("Password length is sufficient.");
  } else {
    console.log("Password is too short.");
  }
}

const password = "abcdefg";
checkPassword(password);

checkPassword("asdadasdasdas");
checkPassword("ababbabab");
checkPassword("aarararatagaaghag");

console.log("-------");

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/

console.log("Ex. 2");
function uppercaseName(name) {
  console.log(name.toUpperCase());
}

uppercaseName("cihan");
uppercaseName("omer");
uppercaseName("sevgi");

console.log("-------");

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

console.log("Ex. 3");
function normalizeEmail(email) {
  console.log(email.toLowerCase());
}

normalizeEmail("SENAY.ADANIR@Gmail.COM");

console.log("-------");

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/

console.log("Ex. 4");

function getDomain(email) {
  const indexOfAtSign = email.indexOf("@");
  console.log(email.substring(indexOfAtSign + 1));
}

function getDomain2(email) {
  const array = email.split("@");
  console.log(array[1]);
}

getDomain("user@example.com");
getDomain2("johndoe@example.com");
getDomain2("someuser@example.com");

console.log("-------");

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
console.log("Ex. 5");

function containsWord(sentence, pattern) {
  const isFound = sentence.includes(pattern);

  if (isFound) {
    console.log(`The word ${pattern} is found in sentence.`);
  } else {
    console.log(`The word ${pattern} is not found in sentence.`);
  }
}

containsWord(
  "Define a function HTML `containsWord(sentence, word)` that checks if the `sentence",
  "ine"
);
containsWord("Define a function", "HTML");

console.log("-------");

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
console.log("Ex. 6");

function checkFileExtension(filename) {
  const isEndsWith = filename.endsWith(".pdf");

  if (isEndsWith) {
    console.log(`This is a PDF file.`);
  } else {
    console.log(`Not a PDF file.`);
  }
}

checkFileExtension("example.pdf");
checkFileExtension("example.jpeg");

console.log("-------");
/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

console.log("Ex. 7");

function compareNumbers(a, b) {
  if (a > b) {
    console.log(`a is bigger`);
  } else if (b > a) {
    console.log(`b is bigger`);
  } else {
    console.log(`a = b, Numbers are equal`);
  }
}

compareNumbers(8, 3);
compareNumbers(3, 9);
compareNumbers(3, 3);

console.log("-------");
/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

console.log("Ex. 8");

function isPalindrome(str) {
  const array = str.split("");
  const reversedArray = array.reverse();
  const reversedStr = reversedArray.join("");

  console.log(str, reversedStr, reversedArray);

  if (str.toLowerCase() === reversedStr.toLowerCase()) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

isPalindrome("abc");
isPalindrome("Aba");

console.log("-------");
/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
console.log("Ex. 9");

function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    const truncatedText = text.slice(0, maxLength);
    console.log(truncatedText + "...");
  } else {
    console.log(text);
  }
}

truncateString("This is an example sentence which is should be to long.", 24);

truncateString("This is test sentence.", 24);

console.log("-------");
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
console.log("Ex. 10");

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
evenOrOdd(13);
evenOrOdd(10);

console.log("-------");
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
console.log("Ex. 11");
function checkProtocol(url) {
  const convertedUrl = url.toLowerCase();
  if (convertedUrl.startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}

checkProtocol("https://www.w3schools.com/js/js_switch.asp?authuser=0");
checkProtocol("ftp://example.com/files/document.txt");

console.log("-------");
/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/

// value == value
/// value and type === value and type

console.log("Ex. 12");

function getDayOfWeek(num) {
  let dayName;

  switch (num) {
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
    case 7:
      dayName = "Sunday";
      break;
    default:
      dayName = "Invalid Day Name";
  }
  console.log(dayName);
}

getDayOfWeek(5);
getDayOfWeek(9);
getDayOfWeek("9");

console.log("-------");

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
console.log("Ex. 13");

function repeatWord(word, times) {
  console.log(word.repeat(times));
}
repeatWord("senay ", 5);

console.log("-------");
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
console.log("Ex. 14");

function censorWord(sentence, target) {
  const replacedSentence = sentence.replaceAll(target, "****");
  console.log(replacedSentence);
}
censorWord(
  "It is a test sentence including some words: Cat, Dog, Bird, cat...",
  "Cat"
);
censorWord(
  "It is a test sentence including some words: Cat, Dog, Bird, cat...",
  /cat/gi
);

console.log("-------");
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

console.log("Ex. 15");

function startsWithA(str) {
  if (str.charAt(0).toUpperCase() === "A") {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}

startsWithA("Example");
startsWithA("Abcde");
startsWithA("abcde");

console.log("-------");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
console.log("Ex. 16");

function sliceLastN(text, n) {
  const slicedText = text.slice(-n);
  console.log(slicedText);
}

sliceLastN(`Slice this content and log it.`, 7);

console.log("-------");

/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> "A"
     80-89 -> "B"
     70-79 -> "C"
     60-69 -> "D"
     below 60 -> "F"
   - Log the grade.
*/

console.log("Ex. 17");

function gradeChecker(score) {
  switch (true) {
    case score >= 90:
      console.log("A");
      break;
    case score >= 80:
      console.log("B");
      break;
    case score >= 70:
      console.log("C");
      break;
    case score >= 60:
      console.log("D");
      break;
    default:
      console.log("F");
  }
}
gradeChecker(55);
gradeChecker(76);
gradeChecker(93);

console.log("-------");

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
console.log("Ex. 18");
function replaceCharacter(str, oldChar, newChar) {
  const replacedStr = str
    .toLowerCase()
    .replaceAll(oldChar.toLowerCase(), newChar.toLowerCase());
  console.log(replacedStr);
}

replaceCharacter("Example!!", "!", "?");

console.log("-------");

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/

console.log("Ex. 19");

function titleCaseFixed(sentence) {
  const wordsArray = sentence.toLowerCase().split(" ");

  const titleCasedWords = wordsArray.map(function (word) {
    if (word.length === 0) {
      return word;
    }

    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const titleCasedSentence = titleCasedWords.join(" ");

  console.log(titleCasedSentence);

  return titleCasedSentence;
}

titleCaseFixed(
  "It is a test sentence including some words: Cat, Dog, Bird, cat..."
);

console.log("-------");

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
console.log("Ex. 20");

function trafficLight(color) {
  let text = "";
  switch (color) {
    case "red":
      text = "Stop";
      break;
    case "yellow":
      text = "Caution";
      break;
    case "green":
      text = "Go";
      break;
    default:
      text = "Invalid color";
  }
  console.log(text);
}

trafficLight("red");
trafficLight("yellow");
trafficLight("green");

console.log("-------");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

console.log("Ex. 21");

function isLongString(str) {
  if (str.length > 10) {
    console.log("Long string");
  } else {
    console.log("Short string");
  }
}

isLongString("thisİsALongString");
isLongString("String");

console.log("-------");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
console.log("Ex. 22");

function isSpam(text) {
  let checkedText = text.toLowerCase();
  if (checkedText.includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}

isSpam("This text include Spam!");
isSpam("This text is clean!");

console.log("-------");
/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
console.log("Ex. 23");

function getInitials(fullName) {
  const splitedWords = fullName.split(" "); //["JOHN", "DOE"];

  const initials = splitedWords
    .filter((name) => name.length > 0)
    .map(function (name) {
      return name.charAt(0).toUpperCase();
    });

  const getInitialName = initials.join(".") + ".";

  console.log(getInitialName);

  return getInitialName;
}

getInitials("Senay Adanir");

console.log("-------");

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
console.log("Ex. 24");

function getSeason(monthNum) {
  let text = "";
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      text = "Winter";
      break;
    case 3:
    case 4:
    case 5:
      text = "Spring";
      break;
    case 6:
    case 7:
    case 8:
      text = "Summer";
      break;
    case 9:
    case 10:
    case 11:
      text = "Autumn";
      break;
    default:
      text = "Invalid month";
  }
  console.log(text);
}

getSeason(3);
getSeason(12);
getSeason(7);
getSeason(24);

console.log("-------");

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

console.log("Ex. 25");

function containsNumber(str) {
  const hasDigit = [...str].some((char) => {
    return !isNaN(char) && char !== " ";
  });

  if (hasDigit) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}

containsNumber("hello123world");
containsNumber("hello world");

function containsNumber1(str) {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!isNaN(char) && char !== " ") {
      console.log("Contains number");
      return;
    }
  }

  console.log("No number found");
}

containsNumber1("abc_xyz");
containsNumber1("abc_123xyz");

function containsNumber_Match(str) {
  if (str.match(/\d/)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}

containsNumber_Match("abc456xyz");

console.log("-------");
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
console.log("Ex. 26");

function paddedString(str, maxLength) {
  const paddedStr = str.padEnd(maxLength, "*");
  console.log(paddedStr);
}

paddedString("examp", 10);
paddedString("hello", 7);

console.log("-------");
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

console.log("Ex. 27");

function canVote(age) {
  if (typeof age === "number" && Number.isFinite(age)) {
    //Number.isFinite(age)
    if (age >= 18) {
      console.log("Can vote");
    } else {
      console.log("Too young to vote");
    }
  } else {
    console.log("Invalid input");
  }
}

canVote(15);
canVote(21);
canVote("String");
canVote("21");

console.log("-------");
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
console.log("Ex. 28");

function reverseWords(sentence) {
  const splitedWords = sentence.split(" ");
  const reversedWords = splitedWords.map((word) => {
    return word.split("").reverse().join("");
  });

  const reverseSentence = reversedWords.join(" ");

  console.log(reverseSentence);
}
reverseWords("This is an example sentence");

function reverseWordsWithLoop(sentence) {
  const words = sentence.split(" ");
  const reversedWordsList = [];

  for (let i = 0; i < words.length; i++) {
    const reversedWord = words[i].split("").reverse().join("");
    reversedWordArray.push(reversedWord);
  }
  const reversedSentence = reversedWordsList.join(" ");
  console.log(reversedSentence);
}
reverseWordsWithLoop("This is an example sentence");

console.log("-------");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

console.log("Ex. 29");

function findWordPosition(sentence, word) {
  const wordIndex = sentence.indexOf(word);

  if (wordIndex !== -1) {
    console.log(`The word ${word} begins at index ${wordIndex}.`);
    return wordIndex;
  } else {
    console.log("Not found");
    return -1;
  }
}
const sentence = "Learning of Javascript is a lot of fun!";
const word = "Javascript";

findWordPosition(sentence, word);

console.log("-------");

/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - "+" -> a + b
     - "-" -> a - b
     - "*" -> a * b
     - "/" -> a / b
     - Otherwise -> "Invalid operator"
   - Log the result.
*/
console.log("Ex. 30");

function calculate(a, operator, b) {
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        console.log("You cannot divide by zero");
        break;
      } else {
        result = a / b;
      }
      break;
    default:
      result = "Invalid operator";
  }
  console.log(result);
}
calculate(10, "+", 5);
calculate(10, "-", 5);
calculate(10, "*", 5);
calculate(10, "/", 5);
calculate(10, "%", 5);

console.log("-------");
