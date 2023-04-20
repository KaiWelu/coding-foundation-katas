# JavaScript Coding Katas with Unit Tests

Solve the katas with the following instructions:

- [ ] Clone this repository (on your computer)
- [ ] Delete the existing remote after cloning the repository to your computer (`git remote remove origin`) so that you don't accidently push changes to this repository

All katas are in a separate folder and have a test file that will be automatically executed when loading the index.html of the kata in the browser (please use VS Code Live Server for that).

## Kata: Filter API Data

Implement the `filterApiData` function in `filter-api-data.js` with the following requirements in mind.

- The first parameter `apiData` will be an array that includes objects
- The objects can have different keys
- The second parameter `mandatoryKeys` is a array that includes all keys that an object (from the `apiData` array) should have to pass the filter test
- Return an array with only the objects that include all keys from the `mandatoryKeys` array

### Filter Api Data Examples

```js
const data = [{ id: 1, price: 100 }, { price: 50 }];

const filteredData = filterApiData(data, ["id"]);

console.log(filteredData); // [{id: 1, price: 100}]
```

```js
const data = [
  { id: 1, price: 100 },
  { id: 2, title: "" },
  { id: 3, price: 50 },
];

const filteredData = filterApiData(data, ["id", "price"]);

console.log(filteredData); // [{ id: 1, price: 100 }, { id:3, price: 50}]
```

## Kata: Sum App

Implement the `SumApp` class in `sum-app.js` with the following requirements in mind.

- The `sumApp` class should have a property `numbers` which is an array
- The `sumApp` class should have a method `addNumber(n)` which will add the given number to the `numbers` array
- The `sumApp` class should have a method `getSum()` which return the sum of all numbers added to the `numbers` array
  - The `getSum()` method should return `0` if no numbers have been added to the `numbers` array
- The `sumApp` class should have a method `reset()` which should delete all numbers previously added to the `numbers` array

### Sum App Example

```js
const sumApp = new SumApp();

sumApp.addNumber(1);
sumApp.addNumber(2);

console.log(sumApp.numbers.length); // 2

console.log(sumApp.getSum()); // 3

sumApp.reset();

console.log(sumApp.numbers.length); // 0
console.log(sumApp.getSum()); // 0
```

## Zip Strings

Implement a `zipStrings` function in `zip-strings.js` with the following requirements in mind.

- The `zipStrings` function receives two string parameters
- The `zipStrings` function should return one string where the characters of both parameters are merged using the zip procedure (Reißverschlussverfahren)
- Merge the strings as shown in the `Zip Strings Example` code

### Zip Strings Example

```js
console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
```

## Extract Class Name

TODO

### Extract Class Name Example

```js
console.log(extractClassName("Live-Session Class 2022 September")); // "2022-09"

console.log(extractClassName("Live-Session Class 2022 März")); // "2022-03"

console.log(extractClassName("Live-Session Class 2022 Maerz")); // "2022-03"

console.log(extractClassName("Live-Session 2022 April")); // null

console.log(extractClassName("Live-Session Class 2 X")); // null

console.log(extractClassName("Live-Session Class 2022 Y")); // null

console.log(extractClassName("Live-Session Class 22 April")); // null
```
