const express = require('express');
const app = express();
const chalk = require('chalk');
const cors = require('cors');

const db = require('./mongoDb.js');
const { json } = require('express');
const dbConnection = new db();

app.use(cors());

app.get('/keywords', async function(req, res) {
  res.send(await dbConnection.fetchKeywords());
});

app.get('/search/:searchKeywords', async function(req, res) {
  res.send(await dbConnection.fetchData(JSON.parse(req.params.searchKeywords)));
});

app.listen(5000);
console.log(chalk.blue("Server running on port 5000"));