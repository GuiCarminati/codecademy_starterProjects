let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10);

function compareGuesses(humanGuess,computerGuess,target){
    const getAbsDistance = (val1, val2) => Math.abs(val1-val2);
    const humanDiff = getAbsDistance(humanGuess,target);
    const computerDiff = getAbsDistance(computerGuess,target);
    return (computerDiff < humanDiff) ? false : true; // returns false if computer wins (human wins ties)
}

function updateScore(winner){
    switch(winner){
        case 'human': humanScore++; break;
        case 'computer': computerScore++; break;
        default: return null;
    }
}

const advanceRound = () => currentRoundNumber++;

// console.log(compareGuesses(10,2,5));

