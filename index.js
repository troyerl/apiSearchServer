const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;

const db = require('./mongoDb.js');

app.get('/', async function(req, res) {
  let dbConnection = new db();

  await dbConnection.dbConnect();
  dbConnection.fetchData();

});

app.listen(5000);
console.log("Server running on port 5000");