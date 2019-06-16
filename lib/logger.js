'use strict';
/**
 * 
 * @param {} req 
 * @param {} res 
 * @param {} next 
 */

const logger = (req, res, next) => {
  console.log('LOG:' , req.method, req.path);
  next();
};
module.exports = logger;
