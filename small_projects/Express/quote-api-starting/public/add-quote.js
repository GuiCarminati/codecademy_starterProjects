import { renderError, renderMessage } from "./utils.js";

const newQuoteContainer = document.getElementById('new-quote');

const createButton = document.getElementById('create');

createButton.addEventListener('click', () => {
  const newAuthor = document.getElementById('newAuthor').value;
  const newQuote = document.getElementById('newQuote').value;
  const newYear = document.getElementById('newYear').value;
  if(newAuthor && newQuote && newYear){
    fetch(`/api/quotes/?quote=${newQuote}&person=${newAuthor}&year=${newYear}`,{method:'POST'})
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          renderError(newQuoteContainer,response);
        }
      })
      .then(({quote}) => {
        renderMessage(newQuoteContainer,
          `<h3>Congrats, your quote was created!</h3>
          <div class="quote-text">${quote.id}. ${quote.quote}</div>
          <div class="attribution">- ${quote.person}, ${quote.year}</div>
          <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
          `);
      });
  } else {
    const response = {
      status: 400,
      statusText: 'Invalid parameters. Please make sure you provide valid values for Author, Quote and Year.'
    };
    renderError(newQuoteContainer,response);
  }
});