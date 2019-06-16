'use strict';

const router = require('express').Router();

let db = [];


const swaggerUi = require('swagger-ui-express');
//const swaggerDocument = require('../docs/swagger.json');

const logger = require('./logger');
const validate = require('./validate');

router.use('/', swaggerUi.serve);
//router.get('/', swaggerUi.setup(swaggerDocument));

/** Get All the categories
 * @param {} req
 * @param {} res
 * @param {} next
*/
router.get('/categories', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

/** Get All the categories by Id
 * @param {} req
 * @param {} res
 * @param {} next
*/

router.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

/** Post a category
 * @param {} req
 * @param {} res
 * @param {} next
*/
router.post('/categories', (req,res) => {
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

/** Put a category
 * @param {} req
 * @param {} res
 * @param {} next
*/
router.put('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  db.map( (element, id) => {
    let {name} = req.body;
    let record = {name};
    res.json(record);
  });
  
});

/** Delete a category
 * @param {} req
 * @param {} res
 * @param {} next
*/
router.delete('/categories/:id', (req,res,next) => {
  let id = req.params.id;

  let index = db.findIndex(record => {
    record.id === parseInt(id)
  });
  db.splice(index, 1);
  res.json({});
});

module.exports = router;