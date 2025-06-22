

const resetQuotes = (container) => {
  container.innerHTML = '';
}

const renderError = (container,response) => {
  container.innerHTML = `<p>Your request returned an error from the server: </p>
  <p>Code: ${response.status}</p>
  <p>${response.statusText}</p>`;
}

const renderQuotes = (container, quotes = []) => {
  resetQuotes(container);
  if (quotes.length > 0) {
    quotes.forEach(quote => {
      const newQuote = document.createElement('div');
      newQuote.className = 'single-quote';
      newQuote.innerHTML = `<div class="quote-text">${quote.id}. ${quote.quote}</div>
      <div class="attribution">- ${quote.person}, ${quote.year}</div>`;
      container.appendChild(newQuote);
    });
  } else {
    container.innerHTML = '<p>Your request returned no quotes.</p>';
  }
}

const renderMessage = (container,message) => {
  container.innerHTML = `<p>${message}</p>`
}


export { renderError, renderQuotes, renderMessage }