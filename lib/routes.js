'use strict';

const router = require('express').Router();

/**
 * Get all the recrds
 */
app.get('/categories', (req,res,next) => {
  let count = db.length;
  let results = db;
  res.json({count,results});
});

/**
 * Get all the records by ID
 */

app.get('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let record = db.filter((record) => record.id === parseInt(id));
  res.json(record[0]);
});

/**
 * Post category
 */
app.post('/categories', (req,res) => {
  let {name} = req.body;
  let record = {name};
  record.id = db.length + 1;
  db.push(record);
  res.json(record);
});

/**
 * Put a category
 */
app.put('/categories/:id', (req,res,next) => {
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
app.delete('/categories/:id', (req,res,next) => {
  let id = req.params.id;
  let index = -1

  for(let i = 0; i < db.length; i++){
    if(db[i].id === Number(id)){
      index = i;

      db.splice(id,1);
      res.json(id);
    }
  }
});