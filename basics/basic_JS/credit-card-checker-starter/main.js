import { batch, edgeCase1, edgeCase2 } from "./cards.js";

function validateCred(arr){ 
    // Luhn algorithm: Double every other digit starting from the right, subtract 9 if > 9, sum all digits, check if divisible by 10
    // before starting Luhn alg verification, check if number lenght is acceptable (8-19 digits)
    if(arr.length < 8 || arr.length > 19) return false;

    let checkArray = [arr[arr.length-1]];
    let double = true;
    
    for(let i=arr.length-2; i>=0; i--){
        let el = arr[i];
        if(double){
            let temp = el*2;
            if(temp>9) temp-=9;
            checkArray.push(temp); 
        } else { 
            checkArray.push(el) 
        }
        double=!double;
    }

    const sum = checkArray.reduce((acc, cur) => acc+cur);
    const modCheck = sum % 10;
    
    // log intermediary steps to check if it's working
    // console.log("Cred Card array: ");
    // console.log(arr);
    // console.log("Check array: ");
    // console.log(checkArray);
    // console.log("sum: "+sum);
    // console.log("modCheck: "+modCheck);
    // console.log("return: ");
    // console.log(modCheck==0 ? true : false)
    
    return modCheck==0 ? true : false;
}

// batch.forEach(el => validateCred(el));

function findInvalidCards(batch){
    return batch.filter(el => !validateCred(el));
}


function idInvalidCardCompanies(invalidsList){
    let companies = [];
    function addToList_onlyOnce (newValue) {
        companies = [...new Set([...companies, newValue])];
    }

    console.log("");
    console.log("Looking for invalid cards' companies");
    

    invalidsList.forEach(el => {
        const firstDigit = el[0];
        let company = null;
        switch (firstDigit) {
            case 3:
                company = "Amex";
                break;
            case 4:
                company = "Visa";
                break;
            case 5:
                company = "Mastercard";
                break;
            case 6:
                company = "Discover";
                break;
            default:
                company = null;
                break;
        }
        company ? addToList_onlyOnce(company) : console.log("Company not found for card number: "+el);
    });
    console.log(companies);
    return companies;
}


const invalidCards = findInvalidCards(batch);

console.log("List of invalid cards:");
invalidCards.forEach(el => console.log(el));
// Expected output:
// List of invalid cards:
// (16) [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
// (16) [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
// (15) [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
// (16) [7, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
// (16) [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]
// (15) [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
// (19) [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
// (16) [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
// (2) [4, 5]
// (32) [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8, 4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]


idInvalidCardCompanies(invalidCards);
// Looking for invalid cards' companies
// Company not found for card number: 7,0,1,1,1,2,7,9,6,1,7,7,7,9,3,5
// (4) ['Visa', 'Mastercard', 'Amex', 'Discover']

// test edge cases
console.log("Card number: "+edgeCase1+" is "+(validateCred(edgeCase1) ? "valid" : "invalid"));
console.log("Card number: "+edgeCase2+" is "+(validateCred(edgeCase2) ? "valid" : "invalid"));
// Card number: 4,5 is invalid
// Card number: 4,5,3,9,6,7,7,9,0,8,0,1,6,8,0,8,4,5,3,9,6,7,7,9,0,8,0,1,6,8,0,8 is invalid
