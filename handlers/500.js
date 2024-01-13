'use strict';

// For error handlers, 'err' goes as first argument
module.exports = (err, req, res, next) => {
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `Server Error: ${err}`,
  });
};
