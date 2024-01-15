'use strict';

// For error handlers, 'err' goes as first argument
module.exports = (err, req, res, next) => {
  res.status(500).send({
    error: 500,
    // can retrieve route data in req.body.route, which will contain the path, which used in server.test.js
    route: req.path,
    query: req.query,
    body: req.body,
    message: `Server Error: ${err}`,
  });
};
