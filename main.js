// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(creditNumbers) {
    let updatedArray = creditNumbers.slice();
    let newArray = updatedArray.reverse();
    let collectedSum = 0;

    for (let num in newArray) {
        if (num % 2 === 0) {
            collectedSum += newArray[num];
        } else {
            let tempNum = newArray[num] * 2
            if (tempNum > 9) {
                tempNum -= 9;
                collectedSum += tempNum;
            } else {
                collectedSum += tempNum;
            }
        }

    }

    if (collectedSum % 10 === 0) {
        return 'Valid';
    } else {
        return 'Invalid';
    }
}

function findInvalidCards(nestedArray) {
    let caughtInvalid = [];
    for (let array in nestedArray) {
        if (validateCred(nestedArray[array]) === 'Invalid') {
            caughtInvalid.push(nestedArray[array]);
        }
    }
    return caughtInvalid;
}


function idInvalidCardCompanies(nestedArray) {
    let cardArray = nestedArray.slice();
    let invalidCardCompanies = [];

    for (let i in cardArray) {
        if (cardArray[i][0] === 3) {
            if (invalidCardCompanies.includes('Amex (American Express)') === false) {
                invalidCardCompanies.push('Amex (American Express)');
            }
        } else if (cardArray[i][0] === 4) {
            if (invalidCardCompanies.includes('Visa') === false) {
                invalidCardCompanies.push('Visa');
            }
        } else if (cardArray[i][0] === 5) {
            if (invalidCardCompanies.includes('Mastercard') === false) {
                invalidCardCompanies.push('Mastercard');
            }
        } else if (cardArray[i][0] === 6) {
            if (invalidCardCompanies.includes('Discover') === false) {
                invalidCardCompanies.push('Discover');
            }
        } else {
            return "Company not found";
        }
    }
    return invalidCardCompanies;
}

console.log(validateCred(valid2));
console.log(validateCred(invalid3));
console.log(findInvalidCards(batch));

let invalidBatch = findInvalidCards(batch);

console.log(idInvalidCardCompanies(invalidBatch));
