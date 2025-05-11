import utils from './modules/utilities.js'

class ShiftCipher {
  constructor(shiftNum){
    this._shiftNum=shiftNum;
  }
  encrypt(string){
    const str = string.toUpperCase();
    let newString = "";
    for(let i=0; i<str.length; i++){
        newString += this.shiftChar(str[i], this._shiftNum);
    }
    return newString;
  }
  decrypt(string){
    const str = string.toUpperCase();
    let newString = "";
    for(let i=0; i<str.length; i++){
        newString += this.shiftChar(str[i], -this._shiftNum);
    }
    return newString;

  }
  shiftChar(char,shift){
    const code = char.charCodeAt(char[0])-64; // get uppercase ASCII char, work it within 1-26 range
    if(code < 1 || code > 26 || !code) return char; // if character is not a letter, return the character unchanged    
    const newCode = utils.modNoZero(code+shift,26); // if mod result==0, then 26 (e.g., 26%26==0 -> 26, giving a range of 1-26 instead of 0-25)
    const newChar = String.fromCharCode(newCode+64);
    return newChar;
  }
}

const cypher = new ShiftCipher(1);

const myString = "This is my string";
// const myString = "AbcdefghijklmnopqrstuvwxYZ123456789-* 0$€";

const mysteryString = cypher.encrypt(myString);
console.log(mysteryString);
const decodedString = cypher.decrypt(mysteryString);
console.log(decodedString);




// function tests(){
//     const string = "abcdefgh".toUpperCase()
//     const char = string[0]
//     const code = char.charCodeAt(0)-64;

//     console.log(char)
//     console.log(code)

//     const shiftNum = -2;

//     const newCode = utils.mod(code+shiftNum,26) || 26; //(code+shiftNum) % (-26) || 26; //
//     console.log(newCode)
//     const newChar = String.fromCharCode(newCode+64);

//     console.log(newChar)
// }

// tests();