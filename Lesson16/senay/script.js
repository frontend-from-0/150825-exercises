/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

console.log("Ex.1 ");

function sumArray(numbers) {
  let sum = 0;
  // index - i , j, l, m
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      sum += numbers[i];
    } else {
      console.log("The value is in incorrect format.");
      // maybe try to convert value to a number, otherwise warn user that the value is in incorrect format
    }
  }
  console.log(sum);
}

sumArray([1, 3, "5", 7, -22, 22]);

/* 
1 - index 0 => let sum = 1;
3 - index 1
5 - index 2
6 - index 3
-22 - index 4
22 - index 5
break
*/

console.log("-------");

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/
console.log("Ex.2 ");

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log("The maximum number of the array is: ", max);
}

// findMax ([1,2,3,4,5])
// findMax ([100,2,3,4,5])
findMax([100, 2, -53, 4, 50]);

console.log("-------");
/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
console.log("Ex. 3");

function countOddEven(numbers) {
  let odds = 0; //let odds;
  let evens = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== "number") {
      console.log("Error: please only provide numbers!");
      return;
    }

    if (numbers[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log("Even:", evens, "Odd:", odds);
}

countOddEven([1, 2, 3, 4, 5, 6]);

console.log("-------");

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/
console.log("Ex. 4");

let sum = 0;

function sumRange(start, end) {
  while (start <= end) {
    sum += start;
    start++;
  }
  console.log(`Total sum is: ${sum}`);
}

sumRange(3, 10);

console.log("-------");
/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/

console.log("Ex. 5");

function reverseArray(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const currentElement = arr[i];
    reversedArray.push(currentElement);
  }
  console.log(reversedArray);
}

reverseArray(["apple", "banana", true]);

console.log("-------");
/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

console.log("Ex. 6");

function filterNegative(numbers) {
  let newNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    if (currentNumber >= 0) {
      newNumbers.push(currentNumber);
    }
  }
  return newNumbers;
}

console.log(filterNegative([3, 5, -12, 8, -5]));

console.log("-------");
/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
console.log("Ex.7");
function doubleValues(numbers) {
  const result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  console.log(result);
}
doubleValues([38, 25, 77, 81]);

console.log("-------");
/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
console.log("Ex.8");

function printCharacters(str) {
  for (const character of str) {
    console.log(character);
  }
}
printCharacters("Hello");

console.log("-------");
/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

console.log("Ex.9");

function sumObjectValues(obj) {
  let sum = 0;

  for (const prop in obj) {
    const value = obj[prop];

    if (typeof value === "number") {
      if (isFinite(value)) {
        sum += value;
      }
    }
  }
  return sum;
}

const exampleObj = {
  productName: "banana",
  amount: "25",
  amount2: 30,
  amount3: 10,
};

console.log(sumObjectValues(exampleObj));

console.log("-------");

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
console.log("Ex.10");

function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

printObjectKeys({
  name: "yasar",
  age: 27,
  city: "mersin",
});

console.log("-------");

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
console.log("Ex.11");

function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;

  if (numbers.length === 0) {
    console.log(`The sum are empty.`);
    return;
  }
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);

  console.log(`The sum of [${numbers}] is ${sum}.`);
}

sumWithDoWhile([23, -1, 0, 34, 40]);

console.log("-------");
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

console.log("Ex.12");

function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    if (newArr.includes(currentItem)) {
      console.log(`The item "${currentItem}" is dublicated in [${arr}]!`);
    } else {
      newArr.push(currentItem);
    }
  }
  return newArr;
}

const newArray = removeDuplicates([1, 2, "a", true, 2, "b", "c", "a"]);

console.log(newArray);

console.log("-------");

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

console.log("Ex.13");

function factorial(n) {
  let fac = 1;

  if (n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  }

  for (let i = 1; i <= n; i++) {
    fac *= i;
  }
  return fac;
}
console.log(`5!: ${factorial(5)}`);
console.log(`0!: ${factorial(0)}`);
console.log(`(-5)!: ${factorial(-5)}`);

console.log("-------");
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

console.log("Ex.14");

function reverseWords(sentence) {
  const wordsArray = sentence.split(" ");
  const reversedArray = wordsArray.reverse();
  const reverseSentence = reversedArray.join(" ");
  console.log(reverseSentence);
}

reverseWords("This is 14th exercise of lesson16");

function reverseWords2(sentence) {
  const arrWords = sentence.split(" ");
  const reversedArrWords = [];

  for (let i = 0; i < arrWords.length; i++) {
    reversedArrWords.unshift(arrWords[i]);
  }
  const reversedSentence = reversedArrWords.join(" ");
  return reversedSentence;
}
console.log(reverseWords2("This is 14th exercise of lesson16"));

console.log("-------");

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log("Ex.15");

function filterLongWords(words, minLength) {
  const filteredLong = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      filteredLong.push(words[i]);
    }
  }
  return filteredLong;
}

console.log(
  "Filtered words are:" +
    " " +
    filterLongWords(["word", "longWord", "word", "longWord"], 6)
);

console.log("-------");
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
console.log("Ex.16");

function logElementWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
const indexArr = ["apple", "banana", "lemon", "strawbery"];
logElementWithIndex(indexArr);

//Alternative modern JS;  "array.forEach(callbackFn(element, index, array))"
function logElementWithIndex_forEach(arr) {
  arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
  });
}

logElementWithIndex_forEach(indexArr);

console.log("-------");
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log("Ex.17");

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log("The maximum number of the array is: ", min);
}
const exmpArr = [1, 2, 3, 6, -4, 0, 100, 36];

findMin(exmpArr);

console.log("-------");
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

console.log("Ex.18");

function countOccurrences(arr, word) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      counter++;
    }
  }
  console.log(`${word} is found ${counter} times in array.`);
}

const arrEx18 = [
  "cheese",
  "oil",
  "olive",
  "bread",
  "a",
  "oil",
  "butter",
  "oil",
];

countOccurrences(arrEx18, "oil");

console.log("-------");
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log("Ex.19");

function removeFalsyValues(arr) {
  let trueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      trueArr.push(arr[i]);
    }
  }
  console.log(`The new array without falsy values is: [ ${trueArr} ]`);
}

const arrExmp19 = ["b", false, 1, 8, 7, "a", true, 34, 8, null];

removeFalsyValues(arrExmp19);

console.log("-------");
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
console.log("Ex.20");

function sumDigits(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const digitChar = parseInt(char);
    if (!isNaN(digitChar)) {
      sum += digitChar;
    }
  }
  console.log(`The sum of digits of ${str} string is ${sum}.`);
}

sumDigits("A1b2c3d4");

function sumDigits2(str) {
  let sum = 0;
  for (const char of str) {
    const digitChar = parseInt(char);
    if (!isNaN(digitChar)) {
      sum += digitChar;
    }
  }
  console.log(`The sum of digits of ${str} string is ${sum}.`);
}

sumDigits2("A1b2c3d4");

console.log("-------");
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log("Ex.21");

function averageArray(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  let average = sum / numbers.length;
  console.log(`The average of numbers [ ${numbers} ] is ${average}.`);
}

averageArray([8, -32, 9, 15, 45]);

console.log("-------");
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log("Ex.22");

function flattenArray(twoDArray) {
  let oneDArray = [];
  for (let i = 0; i < twoDArray.length; i++) {
    if (Array.isArray(twoDArray[i])) {
      for (let j = 0; j < twoDArray[i].length; j++) {
        twoDArray.push(twoDArray[i][j]);
      }
    }

    if (!Array.isArray(twoDArray[i])) {
      oneDArray.push(twoDArray[i]);
    }
  }
  console.log(`The flatten array is [ ${oneDArray}].`);
}

flattenArray([[1, 2], [3, 4], 5, 6]);

console.log("-------");
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log("Ex.23");

function findWordsWithLetter(words, letter) {
  let findedWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      findedWords.push(words[i]);
    }
  }
  console.log(`The findedWords with "${letter}" letter are: ${findedWords}.`);
}

findWordsWithLetter(["şemsiye", "kiraz", "şapka", "şeker", "aşk"], "ş");

console.log("-------");
/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log("Ex.24");

function pushPopExamples(arr, itemToPush) {
  arr.push(itemToPush);
  console.log("The uploaded array is :", arr);
  let popedItem = arr.pop();
  console.log("Deleted item is :", popedItem);
  console.log("The final array is: ", arr);
}

const arrExmp24 = ["key", "item", "word", "a", "b", "c"];
pushPopExamples(arrExmp24, "d");

console.log("-------");
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
console.log("Ex.25");

function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log("The updated queue is: ", queue);
  const removedPerson = queue.shift();
  console.log("The removed item is: ", removedPerson);
  console.log("The final queue is: ", queue);
}

manageQueue(["Senay", "Pamir"], "Ali");

console.log("-------");
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
console.log("Ex.26");

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(todoList);
  const removedTasks = todoList.splice(startIndex, deleteCount, ...newTasks);
  console.log("The removed tasks: ", removedTasks);
  console.log(todoList);
}

updateTodoList(
  ["Shoping", "Gym", "Homework", "Cook"],
  2,
  1,
  "Study JS",
  "Study English"
);

console.log("-------");
