const { quotes } = require("./data");

const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}


const getQuotesByAuthor = (author,quotesArr) => {
  const authorQuotes = quotesArr.filter(quote => quote.author===author);
  return authorQuotes; // returns an empty array if no quotes are found for the author
};

const addNewQuote = (newQuote,newAuthor,quotesArr) => {
  const quoteObj = {
    quote: newQuote,
    person: author
  };
  quotesArr.push(quoteObj);
  return quoteObj;
};

module.exports = {
  getRandomElement,
  getQuotesByAuthor,
  addNewQuote
};
