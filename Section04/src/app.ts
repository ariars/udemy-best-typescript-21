// const username = 'max';

// console.log(`Hello, ${username}`);
// let age = 30;

// function add(a: number, b: number): number {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     var isOld = true;
// }

// console.log(isOld);
// console.log(result);

// const add = (a: number, b: number = 1): number => a + b;
// const printOutput = (output: string | number): void => console.log(output);

// console.log(add(2, 5));
// console.log(add(2));

// const button = document.querySelector('button')!;
// button?.addEventListener('click', (event) => {
//     console.log(event);
// });

// button?.addEventListener('click', event => console.log(event));

// const add = (a: number, b: number = 1): number => a + b;
// console.log(add(2));

/* Spread Operator */
// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];
// activeHobbies.push(...hobbies);
// console.log(activeHobbies);

// const person = { name: 'Max', age: 30 };
// const copiedPerson = { ...person };
// console.log(copiedPerson);

/* Rest Parameters */
// const add = (...numbers: number[]) => {
//   console.log(numbers);
//   return numbers.reduce((curResult, curValue) => { 
//     return curResult + curValue 
//   }, 0);
// };

// const addedNumbers = add(5, 10, 2, 3.7);
// console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = ['Sports', 'Cooking', 'Hiking', 'Reading'];
console.log(hobby1, hobby2, remainingHobbies);

const person = { name: 'Max', age: 30 };
const { name: personName, ...otherPersonProps } = person;
console.log(personName, otherPersonProps);