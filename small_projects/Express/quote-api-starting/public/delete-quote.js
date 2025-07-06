import { renderError, renderMessage } from "./utils.js";

const deleteMessageContainer = document.getElementById('delete-message');

const deleteButton = document.getElementById('delete');
const checkButton = document.getElementById('check-id');

checkButton.addEventListener('click', () => {
  const id = document.getElementById('id').value;
  if(id){
    fetch(`/api/quotes/${id}/`,{method:'GET'})
      .then(response => {
        if(response.ok) {
          return response.json();
        } else {
          renderError(deleteMessageContainer,response);
        }
      })
      .then(({quote}) => {
        renderMessage(deleteMessageContainer,
          `<div class="quote-text">${quote.id}. ${quote.quote}</div>
          <div class="attribution">- ${quote.person}, ${quote.year}</div>
          `);
      });
  } else {
    const response = {
      status: 400,
      statusText: 'Invalid parameters. Please make sure you provide a valid ID.'
    };
    renderError(deleteMessageContainer,response);
  }
});

deleteButton.addEventListener('click', () => {
  const id = document.getElementById('id').value;
  if(id){
    fetch(`/api/quotes/${id}/`,{method:'DELETE'})
      .then(response => {
        if(response.ok) {
          renderMessage(deleteMessageContainer,`Quote with id ${id} deleted.`);
        } else {
          renderError(deleteMessageContainer,response);
        }
      })
  } else {
    const response = {
      status: 400,
      statusText: 'Invalid parameters. Please make sure you provide a valid ID.'
    };
    renderError(deleteMessageContainer,response);
  }
});

