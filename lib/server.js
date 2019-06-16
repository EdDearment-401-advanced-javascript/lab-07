'use strict';

/** @module lib/server */

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

let db = [];

/**
 * @constructor
 * @param {String} alias - Alias of person 
 * @param {Number} id  - Unique identifier for the Person Object
 */

function Hero(alias, id){
  if(typeof alias === 'string'){
    this.alias;
  }else{
    throw new Error ('invalid alias provided')
  }
  // this.alias = alias = typeof alias === 'string' ? alias: 'invalid name provided';
  // id = Number(id);
}

app.use(express.json());

/**
 * @swagger
 * /categories
 *  get:
 *   responses:
 *    '200':
 *      description: Get all entries
 *      content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          name:
 *           type: string
 *           example: "Matt-Man" 
 */

app.use(routes);

app.use((err, req, res, next) => {
  console.error(err);
  res.send(500).send('Internal server error encountered');
})

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

