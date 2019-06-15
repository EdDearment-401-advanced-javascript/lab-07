'use strict';

const logger = (req, res, next) => {
  console.log('Logging' , req.method, req.path);
  next();
};
module.exports = logger;
