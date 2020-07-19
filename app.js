// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5); //[]
// // console.log(newNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arraylistItems = Array.from(listItems);
// console.log(arraylistItems);

// const hobbies = ['cooking', 'sports'];
// const personalData = [30, 'Max', {moreDetails: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// // console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElement = hobbies.splice(-1, 1); // -1 here start deleting from the the last element of the array
// console.log(hobbies);

const testReselts = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testReselts.slice(-3, -1); //const storedResults = testReselts.slice(2);
const storedResults = testReselts.concat([3.99, 2])

testReselts.push(5.91);

console.log(storedResults, testReselts);