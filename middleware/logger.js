'use strict';

const logger = (req, res, next) => {
  // Add log to request object, useful for logging, tracking, or passing information between middleware.
  req.log = ('this is a log!');
  // console.log('this is a console log');
  next();
};

module.exports = logger;
