const express = require('express');
const app = express();

const db = require('./mongoDb.js');
const dbConnection = new db();

app.get('/', async function(req, res) {
  await dbConnection.fetchData();
});

app.get('/keywords', async function(req, res) {
  res.send(await dbConnection.fetchKeywords());
});

app.listen(5000);
console.log("Server running on port 5000");