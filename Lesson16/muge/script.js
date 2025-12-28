/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

console.log('Ex.1 ');

function sumArray(numbers) {
  let sum = 0;
  // index - i , j, l, m
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
    } else {
      // maybe try to convert value to a number, otherwise warn user that the value is in incorrect format
    }
  }
  console.log(sum);
}

sumArray([1, 3, '5', 7, -22, 22]);

/* 
1 - index 0 => let sum = 1;
3 - index 1
5 - index 2
6 - index 3
-22 - index 4
22 - index 5
break
*/

console.log('-------');

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/
console.log('Ex.2 ');

function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  console.log('The maximum number of the array is: ', max);
}

// findMax ([1,2,3,4,5])
// findMax ([100,2,3,4,5])
findMax([100, 2, -53, 4, 50]);

console.log('-------');
/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
console.log('Ex. 3');

function countOddEven(numbers) {
  let odds = 0; //let odds;
  let evens = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
      console.log('Error: please only provide numbers!');
      return;
    }

    if (numbers[i] % 2 === 0) {
      evens++;
    } else {
      odds++;
    }
  }
  console.log('Even:', evens, 'Odd:', odds);
}

countOddEven([1, 2, 3, 4, 5, 6]);

console.log('-------');

/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/

console.log('Ex. 4');

function sumRange(start, end) {
  let total = 0;
  let current = start; 

  while (current <= end) {
    total += current;
    current++; 
  }
  console.log("Total:", total);
}

sumRange(1, 5);

console.log('-------');

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/

console.log('Ex. 5');

function reverseArray(arr) {
  const reversedArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    const currentElement = arr[i];
    reversedArray.push(currentElement);
  }
  console.log(reversedArray);
}

reverseArray(['apple', 'banana', true]);

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/
console.log('Ex. 6');

function filterNegative(numbers) {
  const positiveNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    }
  }


  console.log(positiveNumbers);
}


filterNegative([10, -5, 3, -1, 0, 20]); 


console.log('-------');


/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
console.log('Ex.7');
function doubleValues(numbers) {
  const result = [];
  for (const number of numbers) {
    result.push(number * 2);
  }
  console.log(result);
}
doubleValues([38, 25, 77, 81]);

/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

console.log('Ex. 8');

function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}

printCharacters("KOD");


console.log('-------');


/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

console.log('Ex. 9');

function sumObjectValues(obj) {
  let total = 0;

  for (let key in obj) {
    const value = obj[key];

    if (typeof value === 'number') {
      total += value;
    }
  }

  console.log("Toplam:", total);
}

const scores = { a: 10, b: 20, c: 5};
sumObjectValues(scores); 


console.log('-------');

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
console.log('Ex.10');

function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

printObjectKeys({ name: 'yasar', age: 27, city: 'mersin' });


console.log('-------');

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

console.log('Ex. 11');

function sumWithDoWhile(numbers) {
  if (numbers.length === 0) {
    console.log("Toplam:", 0);
    return;
  }

  let total = 0;
  let i = 0;

  do {
    total += numbers[i];
    i++;

  } while (i < numbers.length);

  console.log("Toplam:", total);
}

sumWithDoWhile([10, 20, 30]); 


console.log('-------');


/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

console.log('Ex. 12');

function removeDuplicates(arr) {
  const uniqueArr = [];

  for (const item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  console.log(uniqueArr);
}


removeDuplicates([10, 20, 10, 30, 20, 50]); 


console.log('-------');


/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

console.log('Ex. 13');

function factorial(n){
  let result = 1;
  for (let i = n; i > 0; i--){
    result *= i
  }

  console.log(n + "!=", result);
}

factorial(5);

console.log('-------');


/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

console.log('Ex. 14');

function reverseWords(sentence){
  const wordsArray = sentence.split(' ');
  const reversedArray = wordsArray.reverse();
  const result = reversedArray.join();

  console.log(result);
}

reverseWords("JavaScript is a hard language for coding.")


function reverseWordsShort(sentence) {
  const result = sentence.split(' ').reverse().join(' ');
  console.log(result);
}

reverseWordsShort("JavaScript is a beautiful language.")

console.log('-------');


/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

console.log('Ex. 15');

function filterLongWords(words, minLength){
  const longWords = [];

  for (const word of words) {
    if (word.length >= minLength){
      longWords.push(word);
    }
  }

  console.log(longWords);
}

filterLongWords(["computer", "science", "language", "time", "code"], 6);

console.log('-------');

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

console.log('Ex. 16');

function logElementsWithIndex(arr){
  for (let i = 0; i < arr.length; i++){
    console.log("Index:" + i + ",Value:" + arr[i]);
  }
}

logElementsWithIndex(["apple", "samsung", "huawei", "lg"]);

console.log('-------');


/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

console.log('Ex. 17');

function findMin(numbers){
  if (numbers.length === 0){
    console.log("String is empty");
    return;
  }

  let min = numbers[0];
  for(let i = 1; i < numbers.length; i++){
    if(numbers[i] < min){
      min = numbers[i];
    }
  }

  console.log("Smallest number:", min);
}

findMin([15, 7, 132, 199, 56, 12, 4]);

console.log('-------');

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

console.log('Ex. 18');

function countOccurrences(arr, word) {
  let count = 0;

  for (const item of arr) {
    if (item === word) {
      count++;
    }
  }

  console.log(`The word "${word}" appears a total of ${count} times.`);
}

const coding = ["HTML", "CSS", "JS", "HTML", "JS", "JS"];
countOccurrences(coding, "JS"); 

console.log('-------');

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

console.log('Ex. 19');

function removeFalsyValues(arr) {
  const truthyValues = [];
  for (const item of arr) {
    if (item) {
      truthyValues.push(item);
    }
  }

  console.log(truthyValues);
}

removeFalsyValues([7, "fire", "", 0, null, "water", undefined, NaN]); 

console.log('-------');


/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

console.log('Ex. 20');

function sumDigits(str) {
  let total = 0;
  for (const char of str) {
    const num = parseInt(char);
    if (!isNaN(num)) {
      total += num;
    }
  }

  console.log("Sum:", total);
}

sumDigits("abc123d4"); 

console.log('-------');

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

console.log('Ex. 21');

function averageArray(numbers) {
  if (numbers.length === 0) {
    console.log("Average: 0");
    return;
  }

  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  const average = sum / numbers.length;

  console.log("Average:", average);
}

averageArray([10, 20, 30]); 

console.log('-------');

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

console.log('Ex. 22');

function flattenArray(twoDArray) {
  const flatArray = [];
  for (const subArray of twoDArray) {
    for (const item of subArray) {
      flatArray.push(item);
    }
  }

  console.log(flatArray);
}

flattenArray([[1, 2], [3, 4], [5, 6]]); 

console.log('-------');

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

console.log('Ex. 23');

function findWordsWithLetter(words, letter) {
  const matchingWords = [];
  for (const word of words) {
    if (word.includes(letter)) {
      matchingWords.push(word);
    }
  }

  console.log(matchingWords);
}

findWordsWithLetter(["apple", "banana", "kiwi", "strawberry", "pomegranate"], "n");

console.log('-------');

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

console.log('Ex. 24');

function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log("Array:", arr);
  const poppedElement = arr.pop();
  
  console.log("Popped Element:", poppedElement);

  console.log("Result:", arr);
}

pushPopExample(['Apple', 'Pear'], 'Banana');

console.log('-------');

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/

console.log('Ex. 25');

function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  
  console.log("A new person has been added. Queue:", queue);

  const removedPerson = queue.shift();
  
  console.log("Removed Person:", removedPerson);

  console.log("Remaining Queue:", queue);
}

manageQueue(['Ali', 'Veli'], 'Can');

console.log('-------');

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

console.log('Ex. 26');

const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];

function updateTodoList(list, startIndex, deleteCount, ...newTasks) {
  console.log("--- The process is starting. ---");
  console.log("Beginning:", list);

  const deleted = list.splice(startIndex, deleteCount);
  console.log(`Deleted (${deleteCount} items):`, deleted);

  if (newTasks.length > 0) {
    list.push(...newTasks);
    console.log("Added:", newTasks);
  }

  console.log("Result:", list);
}

updateTodoList(todoList, 1, 1, 'Go to Gym');

console.log('-------');
