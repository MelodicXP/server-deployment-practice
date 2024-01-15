'use strict';

// Require use of express, assign to variable named express
const express = require('express');

// Require middleware logger (created in middleware folder)
const logger = require('./middleware/logger.js');

// Require 404 error handler middlware (created in handlers folder)
const notFound = require('./handlers/404.js');

// Require 500 error handler middleware (creaed in handler folder)
const errorHandler = require('./handlers/500.js');

// Assign PORT variable
const PORT = process.env.PORT || 3001;

// Create a single instance of express named app
const app = express();

// Use express and logger to test console.log (test by refreshing http://localhost:3001 )
// app.use(express.json());
// app.use(logger);

// Establish initial route '/' to ensure post and get working
// Test with by visiting http://localhost:3001 for get, and thunderclient for post ('.use' allows for all CRUD executions, when done testing change back to 'app.get')
// Remember in initial test to use 'res.status(200).send('Hello World!')'...change to req.log later;
app.get('/', logger, (req, res, next) => {
  // use req.log from logger.js file in middlware folder as reponse data
  res.status(200).send(req.log);
});

// Create bad rwith error on purpose for testing, will pass on message to errorHandler (located in 500.js file)
app.get('/bad', (req, res, next) => {
  next ('this is an error!');
});

// Catch-all in case route does not exist, send back error message as an object with corresponding properties
// Test with http://localhost:3001/banana (doesn't exist)
app.use('*', notFound);

// Use error handler (from handlers/500.js file) at the end
app.use(errorHandler);

// Use app to listen on a port and console log message its working properly (test by running nodemon)
const startServer = () => {
  app.listen(PORT, () => console.log('server running'));
};

// startServer();
// Export start and app to be use separately for mockRequest testing purposes (index.js).
module.exports = { startServer, app };



