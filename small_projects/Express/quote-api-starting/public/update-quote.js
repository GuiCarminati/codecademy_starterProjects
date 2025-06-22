import { renderError, renderMessage } from "./utils.js";

const newUpdatedQuoteContainer = document.getElementById('new-updated-quote');

const updateButton = document.getElementById('update');
const checkButton = document.getElementById('check-id');

checkButton.addEventListener('click', () => {
  const id = document.getElementById('id').value;
  const newAuthor = document.getElementById('newAuthor');
  const newQuote = document.getElementById('newQuote');
  const newYear = document.getElementById('newYear');
  if(id){
    fetch(`/api/quotes/${id}/`,{method:'GET'})
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          renderError(newUpdatedQuoteContainer,response);
        }
      })
      .then(({quote}) => {
        renderMessage(newUpdatedQuoteContainer,
          `<div class="quote-text">${quote.id}. ${quote.quote}</div>
          <div class="attribution">- ${quote.person}, ${quote.year}</div>
          `);
          newAuthor.value = quote.person;
          newQuote.value = quote.quote;
          newYear.value = quote.year;
      });
  } else {
    const response = {
      status: 400,
      statusText: 'Invalid parameters. Please make sure you provide a valid ID.'
    };
    renderError(newUpdatedQuoteContainer,response);
  }
});


updateButton.addEventListener('click', () => {
  const id = document.getElementById('id').value;
  const newAuthor = document.getElementById('newAuthor').value;
  const newQuote = document.getElementById('newQuote').value;
  const newYear = document.getElementById('newYear').value;
  if(id && newAuthor && newQuote && newYear){
    fetch(`/api/quotes/${id}/?quote=${newQuote}&person=${newAuthor}&year=${newYear}`,{method:'PUT'})
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          renderError(newUpdatedQuoteContainer,response);
        }
      })
      .then(({quote}) => {
        renderMessage(newUpdatedQuoteContainer,
          `<h3>Congrats, your quote was updated!</h3>
          <div class="quote-text">${quote.id}. ${quote.quote}</div>
          <div class="attribution">- ${quote.person}, ${quote.year}</div>
          <p>Go to the <a href="index.html">home page</a> to request and view all quotes.</p>
          `);
      });
  } else {
    const response = {
      status: 400,
      statusText: 'Invalid parameters. Please make sure you provide valid values for ID, Author, Quote and Year.'
    };
    renderError(newUpdatedQuoteContainer,response);
  }
});
