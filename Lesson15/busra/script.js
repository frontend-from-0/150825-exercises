/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

console.log('Ex. 1');

function checkPassword(password) {
  if (password.length >= 8) {
    console.log('Password length is sufficient.');
  } else {
    console.log('Password is too short.');
  }
}

const password = 'abcdefg';
checkPassword(password);

checkPassword('asdadasdasdas');
checkPassword('ababbabab');
checkPassword('aarararatagaaghag');

console.log('-------');

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console.
   - Example: "John Doe" -> "JOHN DOE"
*/

console.log('Ex. 2');
function uppercaseName(name) {
  console.log(name.toUpperCase());
}

uppercaseName('cihan');
uppercaseName('omer');
uppercaseName('sevgi');

console.log('-------');

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

console.log('Ex. 3');

function normalizeEmail(email) {
  console.log(email.toLowerCase());
}

normalizeEmail('BUSRA@GMAIL.COM');


console.log('-------');

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/

console.log('Ex. 4');

function getDomain(email) {
  const indexOfAtSign = email.indexOf('@');
  console.log(email.substring(indexOfAtSign + 1));
}

function getDomain2(email) {
  const array = email.split('@');
  console.log(array[1]);
}

getDomain('user@example.com');
getDomain2('johndoe@example.com');
getDomain2('someuser@example.com');

console.log('-------');

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/

console.log('Ex. 5');

function containsWord(sentence, pattern) {
  const isFound = sentence.includes(pattern);

  if (isFound) {
    console.log(`The word ${pattern} is found in sentence.`);
  } else {
    console.log(`The word ${pattern} is not found in sentence.`);
  }
}

containsWord(
  'Define a function HTML `containsWord(sentence, word)` that checks if the `sentence',
  'ine',
);
containsWord('Define a function', 'HTML');

console.log('-------');

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/

console.log('Ex. 6');

function checkFileExtension(filename) {

  if (filename.toLowerCase().endsWith(".pdf".toLowerCase())) {
    console.log ('This is a PDF file.');
  }

  else {
    console.log ('Not a PDF file.');
  }

}

checkFileExtension('docs.pdf');
checkFileExtension('img.jpg');


console.log('-------');

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/

console.log('Ex. 7');

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

console.log('-------');


/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards.
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

console.log('Ex. 8');

function isPalindrome(str) {
  const array = str.split('');
  const reversedArray = array.reverse();
  const reversedStr = reversedArray.join('')
  
  console.log(str, reversedStr, reversedArray)

  if (str.toLowerCase() === reversedStr.toLowerCase()) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

isPalindrome('abc')
isPalindrome('Aba')


console.log('-------');


/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/

console.log('Ex. 9');

function truncateString(text, maxLength) {

  const str = text.slice(0, maxLength);

  console.log (`${str}...`);

}

truncateString('cut the string to `maxLength` characters, then appends "..." if it was too long.' , 14);

console.log('-------');

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

console.log('Ex. 10');

function evenOrOdd(number) {

  if (number % 2 === 0) {
    console.log ('Even');
  }

  else {
    console.log ('Odd');
  }

}

evenOrOdd(82);
evenOrOdd(103);


console.log('-------');

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

console.log('Ex. 11');

function checkProtocol(url) {

  if (url.toLowerCase().startsWith("https".toLowerCase())) {
    console.log ("Secure connection");
  }

  else {
    console.log ("Unsecure connection");
  }

}

checkProtocol("https://www.baby-walz.de");
checkProtocol("www.baby-walz.de");


console.log('-------');

/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/

console.log('Ex. 12');

function getDayOfWeek(num) {
  switch  (num) {
    case 1 : 
      console.log ("Today is Monday.");
      break;
    
    case 2 : 
      console.log ("Today is Tuesday.");
      break;
    
    case 3 : 
      console.log ("Today is Wednesday.");
      break;
    
    case 4 : 
      console.log ("Today is Thursday.")
      break;
    
    case 5 : 
      console.log ("Today is Friday.")
      break;  

    case 6 : 
      console.log ("Today is Saturday.")
      break;
      
    case 7 : 
      console.log ("Today is Sunday.")
      break;

    default : 
      console.log ("Invalid day")   
  }
}

getDayOfWeek(6);
getDayOfWeek(9);
getDayOfWeek(3);


console.log('-------');

// value == value
/// value and type === value and type

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

console.log('Ex. 13');


console.log('-------');

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

console.log('Ex. 14');


console.log('-------');

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

console.log('Ex. 15');


console.log('-------');

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

console.log('Ex. 16');


console.log('-------');

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

console.log('Ex. 17');


console.log('-------');

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

console.log('Ex. 18');


console.log('-------');

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/

console.log('Ex. 19');


console.log('-------');

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/

console.log('Ex. 20');


console.log('-------');

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

console.log('Ex. 21');


console.log('-------');

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

console.log('Ex. 22');


console.log('-------');

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/

console.log('Ex. 23');


console.log('-------');

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/

console.log('Ex. 24');


console.log('-------');

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

console.log('Ex. 25');


console.log('-------');

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

console.log('Ex. 26');


console.log('-------');

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

console.log('Ex. 27');


console.log('-------');

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/

console.log('Ex. 28');


console.log('-------');

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

console.log('Ex. 29');


console.log('-------');

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

console.log('Ex. 30');


console.log('-------');
