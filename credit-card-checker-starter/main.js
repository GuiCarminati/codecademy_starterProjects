import { batch } from "./cards.js";

// Add your functions below:
function validateCred(arr){
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

idInvalidCardCompanies(invalidCards);
