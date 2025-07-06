const express = require('express');
const app = express();
const bodyPardser = require('body-parser');
const cors = require('cors')
const path = require('path');


module.exports = app;

/* Do not change the following line! It is required for testing and allowing
*  the frontend application to interact as planned with the api server
*/
const PORT = process.env.PORT || 4001;

// Add middleware for handling CORS requests from index.html
app.use(cors())

// Add middware for parsing request bodies here:
app.use(bodyPardser.json());

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');
app.use('/api',apiRouter);


// This conditional is here for testing purposes:
if (!module.parent) { 
  
  // Serve static files from the root of the project
  app.use(express.static(path.join(__dirname)));

  // Main page, serving the index.html file from the root of the project
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.use(express.static('public'));
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
}

