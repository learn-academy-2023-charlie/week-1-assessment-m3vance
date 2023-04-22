// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code: 
// Input: any number
// Output: Number is below, at or above the boiling point
// Process: Using arrow function and conditional statements to determine input and output

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

const bpMeasure = (num) => {
if (num < 212) {
return `Tempurature ${num} is below boiling point`
}
else if (num > 212) {
    return `Temperature ${num} is above boiling point`
}
else {
    (num === 212) 
    return `Temperature ${num} is at boiling point`
}
}

console.log(bpMeasure(temperature1))
console.log(bpMeasure(temperature2))
console.log(bpMeasure(temperature3))

// Outome: 
// Tempurature 42 is below boiling point
// Temperature 350 is above boiling point
// Temperature 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// Input: The two provided arrays
// Output: A number which is the length of the two arrays combined
// Process: Use the + operator to combine the two arrays and use .length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

console.log(padres1984WorldSeriesRuns.length + (padres1998WorldSeriesRuns.length))

// Outcome: 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:
// Input: The given variable
// Output: The given variable reversed
// Process: To use the .split, .reverse and .join built in methodsto get desired output

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"

console.log(currentCohort.split('').reverse().join(''))

//Output: 3202 eilrahC

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// Input: The given index values
// Output: The index place value of the input
// Process: Using the .length and .lastIndexOf built in methods to get the desired output

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(numberOfConnections.lastIndexOf(givenValue1))
console.log(numberOfConnections.lastIndexOf(givenValue2))

// Output: 7
// Output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Input: The given arrays
// Output: The given arrays, in order from largest to smallest
// Process: To use the .sort built in function

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


console.log(sanDiegoSummerTemperatures.sort().reverse())
console.log(sanDiegoWinterTemperatures.sort().reverse())

// Output: 82, 80, 79, 77, 76, 73, 72
// Output:  68, 67, 66, 66, 62, 59, 59


// General notes: I referred to the syllabus lecture notes for a few of the built in methods that I could not remember off the top of my head. I also tried to keep the pseudo code as simple and plain as possible, in order to avoid any confusion or misunderstandings.