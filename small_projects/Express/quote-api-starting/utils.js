const { quotes } = require("./data");

const getRandomElement = arr => {
  if (!Array.isArray(arr)) throw new Error('Expected an array');
  return arr[Math.floor(Math.random() * arr.length)];
}


const getQuotesByAuthor = (author,quotesArr) => {
  const authorQuotes = quotesArr.filter(quote => quote.person===author);
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

const getElementById = (id,quotesArr) => {
  return quotesArr.find(el => el.id===id);
};

const getElementIndexById = (id,quotesArr) => {
  return quotesArr.find(el => el.id===id);
};

const updateElementInArray = (newValue,index,arr) => {
  arr[index] = newValue;
};

const deleteElementInArray = (index,arr) => {
  arr.splice(index,1);
}

module.exports = {
  getRandomElement,
  getQuotesByAuthor,
  addNewQuote,
  getElementById,
  getElementIndexById,
  updateElementInArray,
  deleteElementInArray
};
