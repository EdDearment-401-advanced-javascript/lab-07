'use strict';

const router = require('express').Router();

let db = [];

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

const logger = require('./logger');
const validate = require('./validate');

/**
 * Get all the recrds
 */
router.get('/categories', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

/**
 * Get all the records by ID
 */

router.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

/**
 * Post category
 */
router.post('/categories', (req,res) => {
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

/**
 * Put a category
 */
router.put('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  db.map( (element, id) => {
    let {name} = req.body;
    let record = {name};
    res.json(record);
  });
  
});

/**
 * Delete Record
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