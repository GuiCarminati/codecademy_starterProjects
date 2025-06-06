function formatNumber(num){
    return new Intl.NumberFormat('en-IE',{ maximumSignificantDigits: 2 }).format(num);
}

const utilities = {formatNumber}
export default utilities;