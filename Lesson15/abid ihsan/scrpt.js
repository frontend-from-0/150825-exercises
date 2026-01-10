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
normalizeEmail("USER@Example.COM");

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

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
console.log("Ex. 6");
function checkFileExtension(filename) {
  if (filename.endsWith(".pdf")) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}
checkFileExtension("report.pdf");

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

/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/
console.log("Ex. 9");
function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    console.log(text.slice(0, maxLength) + "...");
  } else {
    console.log(text);
  }
}
truncateString("This is a long line", 10);
/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
console.log("Ex. 10");
function evenOrOdd(number) {
  if (number % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
evenOrOdd(4);
evenOrOdd(5);
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
console.log("Ex, 11");
function checkProtocol(url) {
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.startsWith("http://")) {
    console.log("Secure Connection");
  } else {
    console.log("Insecure Connection");
  }
}
checkProtocol("http://www.google.com");
/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/
console.log("Ex. 12");
function getDayOfWeek(num) {
  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;

    default:
      console.log("Invalid day");
  }
}
getDayOfWeek(3);
getDayOfWeek(9);
// value == value
/// value and type === value and type

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
repeatWord("Hello", 3);
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
console.log("Ex.14");
function censorWord(sentence, target) {
  console.log(sentence.replaceAll(target, "***"));
}
censorWord("This is bad and really bad", "bad");
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
console.log("Ex. 15");
function startsWithA(str) {
  if (str.charAt(0)) {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }
}
startsWithA("Activity");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
console.log("Ex. 16");
function sliceLastN(text, n) {
  console.log(text.slice(-n));
}
sliceLastN("How the economy going", 4);
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
console.log("Ex.17");
function gradeChecker(score) {
  if (score >= 90) {
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}
gradeChecker(97);
gradeChecker(75);
gradeChecker(55);
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
console.log("Ex. 18");
function replaceCharacter(str, oldChar, newChar) {
  console.log(str.replaceAll(oldChar, newChar));
}
replaceCharacter("banana", "mango", "orange");
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
console.log("Ex. 19");
function titleCase(sentence) {
  const words = sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
  console.log(words);
}
titleCase("hi, how are you?");

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
  switch (color.toLowerCase()) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Caution");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Invalid Color");
  }
}
trafficLight("Green");
trafficLight("Pink");
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
console.log("Ex. 21");
function isLongString(str) {
  if (str.length > 10) {
    console.log("Long String");
  } else {
    console.log("Short String");
  }
}
isLongString("Hi, how is the weather of the world Today?");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
console.log("Ex. 22");
function isSpam(text) {
  if (text.toLowerCase().includes("spam")) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}
isSpam("Hi, this might be a spam message");
/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
console.log("Ex. 23");
function getInitials(fullName) {
  const nameParts = fullName.split(" ");
  if (nameParts.length >= 2) {
    console.log((nameParts[0][0] + "." + nameParts[1][0] + ".").toUpperCase());
  }
}
getInitials("John Doe");
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
  if (monthNum == 12 || monthNum == 1 || monthNum == 2) {
    console.log("Winter");
  } else if (monthNum == 3 || monthNum == 4 || monthNum == 5) {
    console.log("Spring");
  } else if (monthNum == 6 || monthNum == 7 || monthNum == 8) {
    console.log("Summer");
  } else if (monthNum == 9 || monthNum == 10 || monthNum == 11) {
    console.log("Autum");
  } else {
    console.log("Invalid Month");
  }
}
getSeason(4);
getSeason(12);
getSeason(14);
/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
console.log("Ex. 25");
function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log("Contains number");
  } else {
    console.log("No Number Found");
  }
}
containsNumber("Hi23243");
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
console.log("Ex. 26");
function padString(str, maxLength) {
  if (str.length < maxLength) {
    console.log(str.padEnd(maxLength, "*"));
  } else {
    console.log(str);
  }
}
padString("Hello", "Mark");
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
console.log("Ex. 27");
function canVote(age) {
  if (age >= 18) {
    console.log("Can Vote");
  } else {
    console.log("Too young to vote");
  }
}
canVote(15);
canVote(29);
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
  const bakko = sentence
    .split(" ")
    .map((word) => word.split("").reverse().join())
    .join(" ");
  console.log(bakko);
}
reverseWords("Hello World");
reverseWords("How about you");
reverseWords("How you doing");
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
console.log("Ex. 29");
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index !== -1) {
    console.log(index);
  } else {
    console.log("Not found");
  }
}
findWordPosition("Hello", " hi world");
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
  switch (operator) {
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      console.log(a / b);
      break;
  }
}
calculate(10, "-", 3);
calculate(10, "*", 4);
calculate(40, "/", 10);
