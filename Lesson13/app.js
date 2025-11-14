

console.log('Hello world');

// Global context (everything in this file)

// Single line comments

/* 
Multi
line
comment
*/

/* Keywords:
  const, let, var (old keyword, don't use!), typeof 
 */

// Variables are named in camelCase
const greeting = 'Hi world';
console.log(greeting, ' | The type of the variable is:', typeof greeting);

let name = 'Muge'; // We instantiate the variable and assign the value to it
console.log(name, ' | The type of the variable is:', typeof name);

/* 

= is an assignment opirator in JS
variable (where you store value) is always on the LEFT = value (what you store) is always on the RIGHT side

variable = value
*/



name = 'Merve'; // We assign a new value to the existing variable
console.log(name, ' | The type of the variable is:', typeof name);

// var surname = 'Doe'; - DO NOT USE VAR
const age = 33;



// keyword (const/let) nameOfTheVariable = value (any valid JS datatype / function);


let isDeveloper = false; // or true



let email; // value is undefined right now

console.log('email is', email);

let phone = null;
console.log('phone is', phone);

phone = '073 123 45 67';
console.log('phone is', phone);

phone = null;
console.log('phone is', phone);


const user1 = {
  // key : value,
  id: 'dad69135-8377-4f92-a063-bce96ee971f6',
  username: 'johndoe123',
  name: 'John',
  phone:'073 123 45 67',
  age: 30,
  email: undefined, 
  isAdmin: false,
  address: {
    line1: 'Kungsgatan 20',
    line2: 'Apt. 2',
    city: 'Gothenburg',
    postcode: '12345'
  }
}
console.log('user1 is', user1, 'type of user1 is', typeof user1);

const user2 = {
  // key : value,
  id: '78179271-a649-4f7a-86ea-aa94f5a62ce6',
  username: 'janedoe01',
  name: 'Jane',
  phone:'073 123 45 01',
  age: 10,
  email: 'jane@gmail.com', 
  isAdmin: false,
  address: {
    line1: 'Kungsgatan 20',
    line2: 'Apt. 2',
    city: 'Gothenburg',
    postcode: '12345'
  }
}


const users = [user1, user2, {
  id: '56016f0d-c0b1-4cdc-8a4a-6705a8d77f0f',
  username: 'janedoe02',
  name: 'Jane',
  phone:'073 123 45 01',
  age: 10,
  email: 'jane@gmail.com', 
  isAdmin: false,
  address: {
    line1: 'Kungsgatan 20',
    line2: 'Apt. 2',
    city: 'Gothenburg',
    postcode: '12345'
  }
}];


const mixedArrayExample = ['some string', true, undefined, 100, null, {key: 'some value'}, ['apple', 'banana', 'mango']]


const mixedObjectExample = {
  0: 'some string',
  1: true,
  2: undefined,
  3: 100,
  4: null,
  // ....
}


console.log('typeof mixedArrayExample', typeof mixedArrayExample);





