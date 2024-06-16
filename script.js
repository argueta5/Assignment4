let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Calculate the difference between the last and first element in ages array
let lastIndex = ages.length - 1;
let result = ages[lastIndex] - ages[0];
console.log(result);

// Calculate the average age in the ages array
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let average = sum / ages.length;
console.log(average);

let firstNames = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters in the first names array
let totalLetters = 0;
for (let i = 0; i < firstNames.length; i++) {
    totalLetters += firstNames[i].length;
}
let averageLetters = totalLetters / firstNames.length;
console.log(averageLetters);

let names = ['Kelly', 'Sam', 'Kate'];

// Calculate the total length of each name in names array
let namesLengths = [];
for (let i = 0; i < names.length; i++) {
    namesLengths.push(names[i].length);
}
console.log(namesLengths);

// Calculate the sum of all lengths in the namesLengths array
let total = namesLengths.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);

function repeatWord(word, n) {
    // Repeat the word n times and return the concatenated result
    let repeatedWord = '';
    for (let i = 0; i < n; i++) {
        repeatedWord += word;
    }
    return repeatedWord;
}

function getFullName(firstName, lastName) {
    // Return the full name by concatenating the first name and last name
    return firstName + ' ' + lastName;
}

function sumGreaterThan100(numbers) {
    // Calculate the sum of numbers in the array and check if it is greater than 100
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum > 100;
}

function calculateAverage(numbers) {
    // Calculate the average of numbers in the array
    if (numbers.length === 0) {
        return 0; // Return 0 if the array is empty to avoid division by zero
    }
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    let average = sum / numbers.length;
    return average;
}

function compareAverages(array1, array2) {
    // Calculate average of array1
    let average1 = calculateAverage(array1);
    
    // Calculate average of array2
    let average2 = calculateAverage(array2);
    
    // Compare averages and return true if average1 is greater than average2
    return average1 > average2;
}

function willBuyDrink(isHotOutside, moneyInPocket) {
    // Check if it is hot outside and if moneyInPocket is greater than 10.50
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}

// Function: capitalizeFirstLetter
// Purpose: Capitalizes the first letter of a given string.
// Why: This function ensures consistent formatting of text where the first letter needs to be capitalized.
function capitalizeFirstLetter(str) {
    // Check if the string is empty
    if (str === '') {
        return '';
    }
    
    // Capitalize the first letter and concatenate with the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}