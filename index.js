const express = require('express');
const app = express();
const chalk = require('chalk');

const db = require('./mongoDb.js');
const dbConnection = new db();

app.get('/keywords', async function(req, res) {
  res.send(await dbConnection.fetchKeywords());
});

app.get('/', async function(req, res) {
  await dbConnection.fetchData();
});

app.listen(5000);
console.log(chalk.blue("Server running on port 5000"));