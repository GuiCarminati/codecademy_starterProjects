
const _ = {
    clamp(number, lower, upper){
        if(number < lower) return lower;
        if(number > upper) return upper;
        return number;
    },
    clamp2(number, lower, upper){
        // return Math.min( Math.max(number, lower), upper );
        const lowerClampedValue = Math.max(lower, number);
        const clampedValue =      Math.min(upper, lowerClampedValue);
        return clampedValue;
    }
}



// Do not write or modify code below this line.
module.exports = _;