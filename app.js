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

// const testReselts = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testReselts.slice(-3, -1); //const storedResults = testReselts.slice(2);
// const storedResults = testReselts.concat([3.99, 2])

// testReselts.push(5.91);

// console.log(storedResults, testReselts);
// console.log(testReselts.indexOf(1.5)); //return -1 id it did'nt find it

// console.log(testReselts.includes(10.99));
// console.log(testReselts.indexOf(1.5) !== -1);

// const personData = [{name: 'Max'}, {name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'}));

// const manuel = personData.find((person, idx, persons) => {
//     return person.name === 'Manuel'
// });
// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//     return person.name === 'Max'
// });

// console.log(maxIndex);

// const prices = [10.99, 5,99, 3,99, 6,59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
//     taxAdjustedPrices.push(priceObj);
// })

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
    return priceObj;
})

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
    if (a > b) {
        return 1; // if it returns -1 it will reverse the array
    } else if (a === b) {
        return 0;
    } else {
        return -1; // if it returns 1 it will reverse the array
    }
});

// console.log(sortedPrices.reverse());
console.log(sortedPrices);

const filteredArray = prices.filter(price => price > 6); // this where the arrow function shine

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => {
//     sum += price;
// });

// console.log(sum);

const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
    return preValue + curValue;
}, 0);

// const sum = prices.reduce((preValue, curValue) => preValue + curValue, 0); it can be shorter this way

console.log(sum);